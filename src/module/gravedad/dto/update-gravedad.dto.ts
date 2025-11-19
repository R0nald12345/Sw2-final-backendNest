import { PartialType } from '@nestjs/mapped-types';
import { CreateGravedadDto } from './create-gravedad.dto';

export class UpdateGravedadDto extends PartialType(CreateGravedadDto) {}
