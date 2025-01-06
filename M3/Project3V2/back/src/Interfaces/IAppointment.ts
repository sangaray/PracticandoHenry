enum AppointmentStatus {
  ACTIVE = "Active",
  CANCELED = "Canceled",
}

interface IAppointment {
  id: number;
  date: string; // o Date
  time: string;
  status: AppointmentStatus;
  description: string;
  userId: number;
}

export default IAppointment;
