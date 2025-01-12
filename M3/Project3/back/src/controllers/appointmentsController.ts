import { Request, Response } from "express";
import {
  getAllAppointmentsService,
  getAppointmentByIdService,
  createAppointmentService,
  cancelAppointmentService,
} from "../services/appointmentsService";

// GET /appointements - Obtiene todos los turnos
export const getAllAppointments = async (req: Request, res: Response) => {
  const appointments = await getAllAppointmentsService();
  res.status(200).json(appointments);
};

// GET /appointements/:id - Obtiene un turno por ID
export const getAppointmentById = async (req: Request, res: Response) => {
  const { id } = req.body;
  const appointment = await getAppointmentByIdService(id);
  res.status(200).json(appointment);
};

// POST /appointements/schedule - Crea un nuevo turno
export const createAppointment = async (req: Request, res: Response) => {
  const { date, time, status, description } = req.body;
  const appointment = await createAppointmentService(
    { date, time, status, description },
    1 // userId
  );
  res.status(200).json(appointment);
};

// PUT /appointements/cancel - Cancela el turno
export const cancelAppointment = async (req: Request, res: Response) => {
  const { id } = req.body;
  const result = await cancelAppointmentService(id);
  res.status(200).json(result);
};
