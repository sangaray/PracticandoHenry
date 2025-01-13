import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "credentials" })
export class Credential {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;

  // Credential 1-1 User
  // Declarada en la Entidad Principal => User
}
