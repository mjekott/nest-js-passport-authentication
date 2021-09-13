import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsAlpha, IsEmail, IsString, Length } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @Length(3, 20)
  @IsString()
  password: string;

  @Column({ name: 'first_name' })
  @IsString()
  @IsAlpha()
  firstName: string;

  @Column()
  @IsString()
  @IsAlpha()
  lastName: string;
}
