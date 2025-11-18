import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadoReservaDto } from './create-estado-reserva.dto';

export class UpdateEstadoReservaDto extends PartialType(CreateEstadoReservaDto) {}
