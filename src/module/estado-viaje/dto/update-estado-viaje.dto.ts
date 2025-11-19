import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadoViajeDto } from './create-estado-viaje.dto';

export class UpdateEstadoViajeDto extends PartialType(CreateEstadoViajeDto) {}
