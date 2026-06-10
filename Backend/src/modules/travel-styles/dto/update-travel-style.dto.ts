import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelStyleDto } from './create-travel-style.dto';

export class UpdateTravelStyleDto extends PartialType(
  CreateTravelStyleDto,
) {}