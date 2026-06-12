import { PartialType } from '@nestjs/mapped-types';
import { CreateVibeDto } from './create-vibe.dto';

export class UpdateVibeDto extends PartialType(CreateVibeDto) {}