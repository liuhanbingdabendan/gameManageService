import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  // OneToOne,
  // JoinColumn,
} from 'typeorm';
// import { User } from './user';

@Entity('skill')
export class Skill {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  knowledge: string;

  @Column()
  charm: string;

  @Column()
  courage: string;

  @Column()
  flexible: string;

  @Column()
  physique: string;

  // @OneToOne(() => User)
  // @JoinColumn()
  // user?: User;
}
