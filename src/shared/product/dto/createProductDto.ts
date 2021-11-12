import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  minLength,
} from 'class-validator';

export class CreateProductDto {
  @IsInt()
  @Min(0)
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  name: string;

  @IsOptional()
  description!: string;

  @IsNumber()
  @IsOptional()
  price!: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  create_by!: number;
}
