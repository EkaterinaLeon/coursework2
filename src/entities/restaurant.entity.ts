// restaurant.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id_rest: number;

  @Column()
  restaurant_name: string;

  @Column()
  restaurant_address: string;

  @Column()
  restaurant_phone: string;

  @Column()
  EMAIL_restaurant: string;

  @Column()
  restaurant_requisites: string;

  @Column()
  password_hash: string;

  @Column()
  salt: string;

  @Column()
  check: boolean;
}
