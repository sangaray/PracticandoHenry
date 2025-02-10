import appointmentStatus from "../enums/appointmentStatus";
import IAppointmentDto from "../dtos/IAppointmentDto";
import {
  AppointmentRespository,
  userRepository,
} from "../Repositories/indexRepository";
import { Appointment } from "../entities/AppointmentEntity";

// Servicio para obtener todos los appointments
export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
  const allAppointments: Appointment[] = await AppointmentRespository.find({
    relations: ["user"], // <-- Cargar la relación 'user'
  });
  return allAppointments;
};

// Servicio para obtener un appointment por su ID
export const getAppointmentByIdService = async (
  turnId: number
): Promise<Appointment> => {
  const appointment: Appointment | null = await AppointmentRespository.findOne({
    where: { id: turnId },
    relations: ["user"], // <-- Cargar la relación 'user'
  });

  if (!appointment) {
    throw new Error("Turno no encontrado");
  }
  return appointment;
};

// Servicio para crear un nuevo appointment
export const createAppointmentService = async (
  IAppointmentDto: IAppointmentDto
): Promise<Appointment> => {
  const { date, time, description, userId } = IAppointmentDto;
  console.log(`Creating appointment for userId: ${userId}`); // Log para depuración

  // Validaciones básicas
  // 1. Traer al usuario y validar que el usuario exista
  const user = await userRepository.findOneBy({ id: userId });
  if (!user) {
    throw new Error(`No se encontró el usuario con id ${userId}`);
  }
  console.log(`User found: ${user.id}`); // Log para depuración

  // 2. Crear un nuevo turno
  const newAppointment: Appointment = AppointmentRespository.create({
    date,
    time,
    description,
  });

  // 3. Asociar el turno con el usuario
  newAppointment.user = user;

  // 4. Guardar el turno en la base de datos
  await AppointmentRespository.save(newAppointment);
  console.log(`Appointment created with id: ${newAppointment.id}`); // Log para depuración

  return newAppointment;
};

// Servicio para cancelar un appointment
export const cancelAppointmentService = async (
  turnId: number
): Promise<void> => {
  const appointment: Appointment | null =
    await AppointmentRespository.findOneBy({ id: turnId });
  if (!appointment) {
    throw new Error("Turno no encontrado");
  }
  appointment.status = appointmentStatus.CANCELED;
  await AppointmentRespository.save(appointment);
  return;
};
