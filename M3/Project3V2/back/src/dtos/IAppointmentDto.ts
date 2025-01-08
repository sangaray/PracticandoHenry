import AppointmentStatus from "../enums/appointmentStatus";
interface IAppointmentDto {
  date: string; // 2024-12-28
  time: string; // 14:30
  status: AppointmentStatus;
  description: string;
}

export default IAppointmentDto;
