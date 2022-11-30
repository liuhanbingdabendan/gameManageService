import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('master')
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: number;

  @Column()
  name: string;

  @Column()
  physical: number;

  @Column()
  magic: number;
}
