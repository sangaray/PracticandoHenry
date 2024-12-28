enum AppointmentStatus {
  ACTIVE = "Active",
  CANCELED = "Canceled",
}

interface IAppointment {
  id: string;
  date: string; // 2024-12-28
  time: string; // 14:30
  userId: number;
  status: AppointmentStatus;
  description: string;
}

export default IAppointment;
