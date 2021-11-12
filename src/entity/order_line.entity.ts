import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity('order_line')
export class OrderLine {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  //   @Column()
  //   order_id!: number;

  //   @Column()
  //   product_id: number;

  @Column('float', {
    name: 'unit_price',
  })
  unit_price!: number;

  @Column('int', {
    name: 'amount',
    nullable: false,
  })
  amount!: number;

  @ManyToOne(() => Order, (order) => order.order_line)
  @JoinColumn({ name: 'order_id' })
  order_id!: Order;

  @ManyToOne(() => Product, (product) => product.order_line)
  @JoinColumn({ name: 'product_id' })
  product_id!: Product;

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
