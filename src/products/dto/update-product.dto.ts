// TODO 2: Add validators for a partial update.
// Only name and stock may be received by this operation.
import { IsInt, IsIn , IsNotEmpty, IsOptional, IsString, Min , Max , MaxLength} from 'class-validator';

export class UpdateProductDto {
   @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(1000)
  stock?: number;
}
