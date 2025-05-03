import { IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  // name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  @IsString()
  password: string;
}
