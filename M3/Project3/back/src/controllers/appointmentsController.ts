import { Request, Response } from "express";
import {
  getAllAppointmentsService,
  getAppointmentByIdService,
  createAppointmentService,
  cancelAppointmentService,
} from "../services/appointmentsService";
import { Appointment } from "../entities/AppointmentEntity";
import IAppointmentDto from "../dtos/IAppointmentDto";

// GET /appointements - Obtiene todos los turnos
export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const allAppointments: Appointment[] = await getAllAppointmentsService();
    res.status(200).json(allAppointments);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

// GET /appointements/:id - Obtiene un turno por ID
export const getAppointmentById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  console.log(typeof req.params, req.params);
  const turnId = Number(req.params.id);
  console.log(turnId);
  try {
    const appointment: Appointment = await getAppointmentByIdService(turnId);
    res.status(200).json(appointment);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

// POST /appointements/schedule - Crea un nuevo turno
export const createAppointment = async (
  req: Request<{}, {}, IAppointmentDto>,
  res: Response
) => {
  try {
    const { date, time, description, userId } = req.body;
    const newAppointment = await createAppointmentService({
      date,
      time,
      description,
      userId,
    });
    res.status(201).json(newAppointment);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

// PUT /appointements/cancel - Cancela el turno
export const cancelAppointment = async (
  req: Request<{ turnId: string }>,
  res: Response
) => {
  try {
    const { turnId } = req.params;
    await cancelAppointmentService(Number(turnId));
    res.status(200).json({ message: `Turno con id ${turnId} cancelado` });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};
