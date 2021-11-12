import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BetaResponse } from '../../common/interface/beta_reponse.interface';
import { Product } from '../../entity/product.entity';
import { CreateProductDto } from './dto/createProductDTO';
import { UpdateProductDto } from './dto/updateProductDtd';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  async findAll(): Promise<BetaResponse<Product[]>> {
    const products = (await this.productService.findAll()) || null;
    return {
      statusCode: 200,
      data: products,
    };
  }

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<BetaResponse<Product>> {
    const product = (await this.productService.findById(id)) || null;
    return {
      statusCode: 200,
      data: product,
    };
  }

  @Post('/')
  async createProduct(@Body() createProductDto: CreateProductDto) {
    const product =
      (await this.productService.create(createProductDto)) || null;
    return {
      statusCode: 201,
      data: product,
    };
  }

  @Put('/')
  updateProduct(@Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productService.update(updateProductDto);
  }

  @Delete('/:id')
  async deleteProduct(
    @Param('id') product_id: number,
  ): Promise<BetaResponse<Product>> {
    const product = await this.productService.delete(product_id);
    return {
      statusCode: 200,
      data: product,
    };
  }

  @Post('/:id/action/restore')
  @HttpCode(200)
  async resotreProduct(
    @Param('id') product_id: number,
  ): Promise<BetaResponse<Product>> {
    const product = await this.productService.restore(product_id);
    return {
      statusCode: 200,
      data: product,
    };
  }
}
