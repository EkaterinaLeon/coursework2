// order.dto.ts

import { IsNotEmpty, IsNumber, IsString, IsEnum } from 'class-validator';

export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export class OrderDto {
  @IsNotEmpty()
  @IsNumber()
  id_order: number;

  @IsNotEmpty()
  @IsNumber()
  totalsum: number;

  @IsNotEmpty()
  @IsString()
  order_address: string;

  @IsNotEmpty()
  @IsString()
  catalog_name: string;

  @IsNotEmpty()
  @IsString()
  delivery_time: string;

  @IsNotEmpty()
  @IsString()
  ready_time: string;

  @IsNotEmpty()
  @IsNumber()
  restaurants_id_rest: number;

  @IsNotEmpty()
  @IsEnum(OrderStatus)
  status_id_status: number;

  @IsNotEmpty()
  @IsNumber()
  courier_id_courier: number;
}
