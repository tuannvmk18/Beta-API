import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderLine } from './order_line.entity';
import { User } from './user.entity';

export enum OrderStatus {
  Draft = 'draft',
  Doing = 'doing',
  Done = 'done',
}

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'create_by' })
  create_by: User;

  @Column({
    name: 'status',
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.Draft,
  })
  status: OrderStatus;

  @Column('int', { name: 'table' })
  table: number;

  @OneToMany(() => OrderLine, (order_line) => order_line.order_id)
  order_line: OrderLine[];

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
