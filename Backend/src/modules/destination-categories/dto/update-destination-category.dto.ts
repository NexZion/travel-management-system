import { PartialType } from '@nestjs/mapped-types';
import { CreateDestinationCategoryDto } from './create-destination-category.dto';

export class UpdateDestinationCategoryDto extends PartialType(
  CreateDestinationCategoryDto,
) {}