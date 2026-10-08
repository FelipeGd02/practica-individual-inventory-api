// TODO 1: Add the input validators described in the exercise.
// Keep this DTO as a class and import it normally in the controller.
export class CreateProductDto {
  name!: string;
  category!: 'office' | 'electronics';
  stock!: number;
}
