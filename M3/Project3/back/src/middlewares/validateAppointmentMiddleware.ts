import { Request, Response, NextFunction } from "express";
import IAppointmentDto from "../dtos/IAppointmentDto";

const validateAppointmentMiddleware = async (
  req: Request<{}, {}, IAppointmentDto>,
  res: Response,
  next: NextFunction
) => {
  const { date, time, description, userId } = req.body;
  try {
    if (!date || !time || !userId || !description) {
      throw new Error("Todos los campos son obligatorios");
    }

    // Verificar formato de la fecha
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (!dateRegex.test(date)) {
      throw new Error("El formato de la fecha debe ser DD-MM-YYYY");
    }

    // Verificar formato de la hora
    const timeRegex = /^\d{2}:\d{2}$/;
    if (!timeRegex.test(time)) {
      throw new Error("El formato de la hora debe ser HH:MM");
    }

    // Convertir la fecha y la hora a objetos Date
    const [day, month, year] = date.split("-").map(Number);
    const [hours, minutes] = time.split(":").map(Number);
    const appointmentDate = new Date(year, month - 1, day, hours, minutes);
    const now = new Date();

    console.log(day, month, year, hours, minutes);

    // 1. Valida que la fecha de la cita sea a partir del día siguiente y hasta 14 días después
    const minDate = new Date(now);
    minDate.setDate(now.getDate() + 1);
    const maxDate = new Date(now);
    maxDate.setDate(now.getDate() + 14);

    // Valida que la fecha sea de lunes a viernes
    const dayOfWeek = appointmentDate.getDay();
    console.log("soy dayOfWeek", dayOfWeek);

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      throw new Error("La cita debe ser en un día laboral (Lunes a Viernes)");
    }
    if (appointmentDate < minDate) {
      throw new Error(
        "La fecha de la cita debe ser posterior a la fecha actual"
      );
    }
    if (appointmentDate > maxDate) {
      throw new Error(
        "La fecha de la cita no puede ser posterior a 14 días desde hoy"
      );
    }

    // 3. Validar que la hora sea entre 9 y 18 (formato 24 horas)
    if (hours < 9 || hours >= 18) {
      throw new Error("La cita debe ser entre las 9 y las 18 horas");
    }

    // 4. Valida que el turno sea de 30 minutos
    if (minutes !== 0 && minutes !== 30) {
      throw new Error("La cita debe ser en un horario cada 30 minutos");
    }

    next();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
    return;
  }
};

export default validateAppointmentMiddleware;
