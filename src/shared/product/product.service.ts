import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from '../../entity/product.entity';
import { CreateProductDto } from './dto/createProductDTO';
import { UpdateProductDto } from './dto/updateProductDtd';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findById(product_id: number): Promise<Product> {
    return await this.productRepository.findOne(product_id);
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product_id = createProductDto.id || null;
    // eslint-disable-next-line prettier/prettier
    const isDuplicate =
      product_id != null && (await this.productRepository.findOne(product_id));

    if (isDuplicate) {
      throw new BadRequestException();
    }

    const product = await this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  async update(updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.productRepository.findOne(updateProductDto.id);

    if (!product) {
      throw new BadRequestException();
    }

    return await this.productRepository.save({
      ...product,
      ...updateProductDto,
    });
  }

  async delete(product_id: number): Promise<Product> {
    const product = await this.productRepository.findOne(product_id);
    if (!product) {
      throw new BadRequestException();
    }
    return this.productRepository.softRemove(product);
  }

  async restore(product_id: number): Promise<Product> {
    await this.productRepository.restore(product_id);
    const product = await this.productRepository.findOne(product_id);

    if (!product) {
      throw new BadRequestException();
    }

    return product;
  }
}
