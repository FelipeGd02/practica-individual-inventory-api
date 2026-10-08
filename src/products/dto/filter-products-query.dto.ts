// TODO 3: Add category validation and explicit numeric conversion for limit.
export class FilterProductsQueryDto {
  category?: 'office' | 'electronics';
  limit: number = 5;
}
