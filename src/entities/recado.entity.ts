import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @Column({ unique: true })
//   email: string;
// }
@Entity()
export class Recado {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  texto:string;

  @Column()
  de:string;

  @Column()
  para:boolean;

  @Column({ default: false })
  lido:boolean;

  @Column()
  data:Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}