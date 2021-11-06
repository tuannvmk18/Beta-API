import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column('varchar', { nullable: false, length: 255, name: 'name' })
  name!: string;

  @Column('text', { nullable: false, name: 'description' })
  description: string;

  @Column('int', { nullable: true, unsigned: true, name: 'price' })
  price: number;

  @Column('varchar', { nullable: true, length: 255, name: 'image_path' })
  img_path: string;

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
