// restaurant.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { RestaurantService } from '../services/restaurant.service';
import { CreateRestaurantDto } from '../dto/restaurant.dto';

@Controller('api/restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  createRestaurant(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.createRestaurant(createRestaurantDto);
  }
}
