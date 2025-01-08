import { Router } from "express";
import {
  cancelAppointment,
  getAllAppointments,
  getAppointmentById,
  createAppointment,
} from "../controllers/appointmentsController";

const appointmentsRouter = Router();

appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.get("/:id", getAppointmentById);
appointmentsRouter.post("/schedule", createAppointment);
appointmentsRouter.put("/cancel/:turnId", cancelAppointment);

export default appointmentsRouter;
