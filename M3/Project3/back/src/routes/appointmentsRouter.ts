import { Router } from "express";
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  cancelAppointment,
} from "../controllers/appointmentsController";

const router: Router = Router();

// GET /appointements - Obtiene todos los turnos
router.get("/", getAppointments);
// GET /appointements/:id - Obtiene un turno por ID
router.get("/:id", getAppointmentById);

// POST /appointements/schedule - Crea un nuevo turno
router.post("/schedule", createAppointment);

// PUT /appointements/cancel - Cancela el turno
router.put("/cancel", cancelAppointment);

export default router;
