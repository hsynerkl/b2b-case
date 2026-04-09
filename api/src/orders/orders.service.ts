import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { Order, OrderItem } from './interfaces/order.interface';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  constructor(private readonly productsService: ProductsService) {}

  create(createOrderDto: CreateOrderDto): Order {
    const items: OrderItem[] = [];

    let totalPrice = 0;
    let totalQuantity = 0;

    for (const item of createOrderDto.items) {
      const product = this.productsService.findOne(item.productId);

      if (!product) {
        throw new NotFoundException(`Ürün bulunamadı ${item.productId}`);
      }

      if (product.stock < item.quantity) {
        throw new BadRequestException(
          `${product.name} için yeterli stok yok. mevcut: ${product.stock}`,
        );
      }

      items.push({
        productId: product.id,
        productName: product.name,
        price: product.price,
        quantity: item.quantity,
      });

      totalPrice += product.price * item.quantity;
      totalQuantity += item.quantity;
    }

    for (const item of createOrderDto.items) {
      this.productsService.decreaseStock(item.productId, item.quantity);
    }

    const order: Order = {
      id: this.orders.length + 1,
      items: items,
      totalPrice,
      totalQuantity,
      createdAt: new Date(),
    };

    this.orders.push(order);

    return order;
  }

  findAll(): Order[] {
    return this.orders;
  }
}
