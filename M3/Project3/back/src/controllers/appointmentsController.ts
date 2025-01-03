// Los controladores devuelven un mensaje para cada método http
import { Request, Response } from "express";
import {
  getAppointmentsService,
  getAppointmentByIdService,
  createAppointmentService,
  cancelAppointmentService,
} from "../services/appointmentsService";

// GET /appointements - Obtiene todos los turnos
export const getAppointments = async (req: Request, res: Response) => {
  const appointments = await getAppointmentsService();
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
