// order.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { OrderDto } from '../dto/order.dto';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
      ) {}
    
      async createOrder(orderDto: OrderDto): Promise<Order> {
        // Реализуйте создание заказа в базе данных с использованием TypeORM
        // Пример:
        const newOrder = await this.orderRepository.create(orderDto);
        return await this.orderRepository.save(newOrder);
      }
    
      async getOrderById(id: number): Promise<Order> {
        // Реализуйте получение заказа по его идентификатору
        // Пример:
        const order = await this.orderRepository.findOne(id);
        if (!order) {
          throw new NotFoundException(`Order with id ${id} not found`);
        }
        return order;
      }
    
      async updateOrder(id: number, orderDto: OrderDto): Promise<Order> {
        // Реализуйте обновление заказа в базе данных по его идентификатору
        // Пример:
        const order = await this.getOrderById(id);
        // Обновление свойств заказа на основе данных из orderDto
        order.totalsum = orderDto.totalsum;
        order.order_address = orderDto.order_address;
        // Добавьте обновление других полей при необходимости
        return await this.orderRepository.save(order);
      }
}
