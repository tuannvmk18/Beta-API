import { IsInt, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateProductDto {
  @IsInt()
  @Min(0)
  id: number;

  @IsNotEmpty()
  @IsOptional()
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
