// Decorador: uan función que permite modificar una clase, función, propiedad, etc.
// @entity: es un decorador que convierte a una clase común en una entidad en la base de datos
// @column: es un decorador que convierte a una propiedad en una columna en la base de datos
// Sólo para user vamos a escribir users para que no haya conflictos con postgres
// @PrimaryGeneratedColumn(): es un decorador que genera un id autoincremental para la entidad
// @PrimaryColumn(): es un decorador que convierte una propiedad en una columna primaria

import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Vehicle } from "./Vehicle";

@Entity({
  name: "users", // pone un alias a la tabla o entidad en la base de datos
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  email: string;

  @Column("integer")
  age: number;

  @Column()
  active: boolean;

  @OneToOne(() => Vehicle)
  @JoinColumn()
  vehicle: Vehicle;
}
