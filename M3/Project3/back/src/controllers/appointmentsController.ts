// Los controladores devuelven un mensaje para cada método http
import { Request, Response } from "express";

// GET /appointements - Obtiene todos los turnos
export const getAppointments = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Obtiene todos los turnos" });
};
// GET /appointements/:id - Obtiene un turno por ID
export const getAppointmentById = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Obtener un turno por ID" });
};

// POST /appointements/schedule - Crea un nuevo turno
export const createAppointment = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Crear un nuevo turno" });
};

// PUT /appointements/cancel - Cancela el turno
export const cancelAppointment = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Cancela el turno" });
};
