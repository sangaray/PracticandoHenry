import AppointmentStatus from "../enums/appointmentStatus";

interface IAppointment {
  id: number;
  date: Date; // 2024-12-28
  time: string; // 14:30
  userId: number;
  status: AppointmentStatus;
  description: string;
}

export default IAppointment;
