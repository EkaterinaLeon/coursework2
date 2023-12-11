// restaurant.dto.ts

import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateRestaurantDto {
  @IsNotEmpty()
  @IsString()
  restaurant_name: string;

  @IsNotEmpty()
  @IsString()
  restaurant_address: string;

  @IsNotEmpty()
  @IsString()
  restaurant_phone: number;

  @IsNotEmpty()
  @IsString()
  EMAIL_restaurant: string;

  @IsNotEmpty()
  @IsString()
  restaurant_requisites: number;

  @IsNotEmpty()
  @IsString()
  password_hash: number;

  @IsNotEmpty()
  @IsString()
  salt: number;

  @IsNotEmpty()
  @IsBoolean()
  check: boolean;
}
