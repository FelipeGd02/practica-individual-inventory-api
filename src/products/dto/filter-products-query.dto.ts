// TODO 3: Add category validation and explicit numeric conversion for limit.
import { Type } from 'class-transformer';
import { IsInt, IsIn , IsNotEmpty, IsOptional, IsString, Min , Max , MaxLength } from 'class-validator';

export class FilterProductsQueryDto {
  @IsOptional()
  @IsIn(['office', 'electronics'])
  category?: 'office' | 'electronics';

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(20)
  limit: number = 5;
}