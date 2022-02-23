import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ContactModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  telephone!: string;

  @Column()
  email!: string;

  @CreateDateColumn()
  createDateColumn!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}