// CREANDO ENTITIES
// Al crear las columnas puedo usar
//= ! es el operador de assertion de no nulo de TypeScript, que permite decirle al compilador que un valor no será null ni undefined en tiempo de ejecución. Debe usarse con cuidado y solo cuando estás seguro de que el valor nunca será nulo o indefinido. En el contexto de TypeORM, es útil para las columnas con NOT NULL. No usarlo sin razón, es una mala práctica, ya que evitas que TypeScript te de las alertas necesarias en caso de errores de este tipo.

import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credential } from "./CredentialEntity";
import { Appointment } from "./AppointmentEntity";
@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  birthdate!: string; // o Date

  @Column()
  nDni!: number;

  // User 1-1 Credential
  @OneToOne(() => Credential)
  @JoinColumn({ name: "credentialId" })
  credential!: Credential;

  // User 1:N Appointment
  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments!: Appointment[];
}
