// order.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { OrderStatus } from '../dto/order.dto'; // Импортируем Enum

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id_order: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalsum: number;

  @Column({ type: 'varchar', length: 255 })
  order_address: string;

  @Column({ type: 'varchar', length: 255 })
  catalog_name: string;

  @Column({ type: 'int' })
  delivery_time: number;

  @Column({ type: 'int' })
  ready_time: number;

  @Column({ type: 'int' })
  restaurants_id_rest: number;

  @Column({ type: 'enum', enum: OrderStatus })
  status_id_status: OrderStatus;

  @Column({ type: 'int' })
  courier_id_courier: number;


}
