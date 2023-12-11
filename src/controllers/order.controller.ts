// order.controller.ts

import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { OrderDto } from '../dto/order.dto';

@Controller('api/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() orderDto: OrderDto) {
    return this.orderService.createOrder(orderDto);
  }

  @Get(':id')
  getOrder(@Param('id') id: number) {
    return this.orderService.getOrderById(id);
  }

  @Put(':id')
  updateOrder(@Param('id') id: number, @Body() orderDto: OrderDto) {
    return this.orderService.updateOrder(id, orderDto);
  }

  // Другие методы...
}
