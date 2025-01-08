// appointmentsService.ts

import IAppointment from "../Interfaces/IAppointment";
import appointmentStatus from "../enums/appointmentStatus";
import IAppointmentDto from "../dtos/IAppointmentDto";
import { getUserByIdService } from "./usersService";

// Simulamos una base de datos en memoria
let id: number = 3;
const appointments: IAppointment[] = [
  {
    id: 1,
    date: "2024-08-15",
    time: "10:00",
    userId: 1,
    status: appointmentStatus.ACTIVE,
    description: "Consulta general",
  },
  {
    id: 2,
    date: "2024-09-20",
    time: "14:30",
    userId: 2,
    status: appointmentStatus.ACTIVE,
    description: "Seguimiento",
  },
];

// Servicio para obtener todos los appointments
export const getAllAppointmentsService = async (): Promise<IAppointment[]> => {
  return appointments;
};

// Servicio para obtener un appointment por su ID
export const getAppointmentByIdService = async (
  id: number
): Promise<IAppointment | null> => {
  const appointment = appointments.find((appointment) => appointment.id === id);
  return appointment || null;
};

// Servicio para crear un nuevo appointment
export const createAppointmentService = async (
  appointmentData: IAppointmentDto,
  userId: number // Recibe el userId como parámetro
): Promise<IAppointment> => {
  // Obtenemos el usuario para validar que el usuario si exista, aunque solo sea un objeto
  await getUserByIdService(userId);

  const newAppointment: IAppointment = {
    id,
    date: appointmentData.date,
    time: appointmentData.time,
    userId: userId, // Usamos el userId recibido como parámetro
    status: appointmentStatus.ACTIVE,
    description: appointmentData.description,
  };
  appointments.push(newAppointment);
  return newAppointment;
};

// Servicio para cancelar un appointment
export const cancelAppointmentService = async (
  id: number
): Promise<IAppointment | null> => {
  const appointmentIndex = appointments.findIndex(
    (appointment) => appointment.id === id
  );
  if (appointmentIndex === -1) {
    return null;
  }
  appointments[appointmentIndex] = {
    ...appointments[appointmentIndex],
    status: appointmentStatus.CANCELED,
  };
  return appointments[appointmentIndex];
};
