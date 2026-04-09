import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, name: 'Fren Balatası', price: 1200, stock: 25 },
    { id: 2, name: 'Yağ Filtresi', price: 300, stock: 5 },
    { id: 3, name: 'Jant', price: 11236, stock: 8 },
    { id: 4, name: 'Lastik', price: 4259, stock: 12 },
    { id: 5, name: 'Araba Kokusu', price: 85, stock: 1000 },
    { id: 6, name: 'Hava Filtresi', price: 235, stock: 15 },
    { id: 7, name: 'Fren Diski', price: 879, stock: 10 },
    { id: 8, name: 'Ateşleme Bobini', price: 464, stock: 8 },
  ];

  findAll(search?: string, minStock?: number): Product[] {
    let result = this.products;

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (minStock !== undefined) {
      result = result.filter((p) => p.stock >= minStock);
    }

    return result;
  }

  findOne(id: number): Product {
    const product = this.products.find((p) => p.id === id);

    if (!product) {
      throw new NotFoundException(`Ürün bulunamadı: ID ${id}`);
    }

    return product;
  }

  findByIds(ids: number[]): Product[] {
    return this.products.filter((p) => ids.includes(p.id));
  }

  decreaseStock(productId: number, quantity: number): void {
    const product = this.findOne(productId);
    product.stock -= quantity;
  }
}
