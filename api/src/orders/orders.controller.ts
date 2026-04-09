import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { Order } from './interfaces/order.interface';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto): ApiResponse<Order> {
    const order = this.ordersService.create(createOrderDto);

    return {
      success: true,
      data: order,
      message: 'Sipariş oluşturuldu',
    };
  }

  @Get()
  findAll(): ApiResponse<Order[]> {
    const orders = this.ordersService.findAll();

    return {
      success: true,
      data: orders,
    };
  }
}
