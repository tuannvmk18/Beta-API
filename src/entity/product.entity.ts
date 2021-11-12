import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderLine } from './order_line.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column('varchar', { nullable: false, length: 255, name: 'name' })
  name!: string;

  @Column('text', { nullable: true, name: 'description' })
  description: string;

  // eslint-disable-next-line prettier/prettier
  @Column('float', {
    nullable: true,
    unsigned: true,
    default: 0,
    name: 'price',
  })
  price: number;

  @Column('varchar', { nullable: true, length: 255, name: 'image_path' })
  img_path: string;

  @CreateDateColumn({
    name: 'create_at',
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({
    name: 'update_at',
    nullable: false,
  })
  update_at: Date;

  @DeleteDateColumn({
    name: 'delete_at',
    nullable: true,
  })
  delete_at: Date;

  @OneToMany(() => OrderLine, (order_line) => order_line.product_id)
  order_line: OrderLine[];
}
