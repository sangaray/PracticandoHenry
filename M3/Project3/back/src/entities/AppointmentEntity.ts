import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import AppointmentStatus from "../enums/appointmentStatus";
import { User } from "./UserEntity";

@Entity({ name: "appointments" })
export class Appointment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  date!: string; // o Date

  @Column()
  time!: string;

  @Column({
    default: AppointmentStatus.ACTIVE, // da un valor por defecto
  })
  status!: string;

  @Column()
  description!: string;

  // Appointment N:1 User
  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: "userId" })
  user!: User;
}
