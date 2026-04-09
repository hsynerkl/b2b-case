import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { QueryProductsDto } from './dto/query-products.dto';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(@Query() query: QueryProductsDto): ApiResponse<Product[]> {
    if (query.ids) {
      const productIds = query.ids.split(',').map((id) => parseInt(id, 10));

      const products = this.productsService.findByIds(productIds);

      return {
        success: true,
        data: products,
      };
    }

    const products = this.productsService.findAll(query.search, query.minStock);

    return {
      success: true,
      data: products,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string): ApiResponse<Product> {
    const product = this.productsService.findOne(+id);

    return {
      success: true,
      data: product,
    };
  }
}
