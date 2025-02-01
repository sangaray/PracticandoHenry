import { Router } from "express";
import {
  cancelAppointment,
  getAllAppointments,
  getAppointmentById,
  createAppointment,
} from "../controllers/appointmentsController";
import validateAppointment from "../middlewares/validateAppointmentMiddleware";

const appointmentsRouter = Router();

appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.get("/:id", getAppointmentById);
appointmentsRouter.post("/schedule", validateAppointment, createAppointment);
appointmentsRouter.put("/cancel/:turnId", cancelAppointment);

export default appointmentsRouter;
