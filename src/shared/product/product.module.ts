import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { ProductController } from './product.controller';
import { ProductProviders } from './product.providers';
import { ProductService } from './product.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService, ...ProductProviders],
})
export class ProductModule {}
