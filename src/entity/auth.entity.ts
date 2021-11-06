import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('oauth')
export class OAuth {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 255,
    name: 'username',
  })
  username!: string;

  @Column('varchar', { nullable: true, length: 32, name: 'password' })
  password!: string;

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
