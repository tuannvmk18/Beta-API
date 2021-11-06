import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OAuth } from './auth.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column('varchar', { nullable: false, length: 255, name: 'name' })
  name!: string;

  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 255,
    name: 'email',
  })
  email!: string;

  @Column('boolean', { nullable: true, default: true, name: 'is_active' })
  isActive: boolean;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne((_type) => OAuth)
  @JoinColumn()
  oauth!: OAuth;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updated_at: Date;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  created_at: Date;
}
