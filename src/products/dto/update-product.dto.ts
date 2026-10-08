// TODO 2: Add validators for a partial update.
// Only name and stock may be received by this operation.
export class UpdateProductDto {
  name?: string;
  stock?: number;
}
