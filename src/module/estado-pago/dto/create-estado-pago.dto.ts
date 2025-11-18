import { IsString } from 'class-validator';

export class CreateEstadoPagoDto {
  @IsString()
  nombre: string;
}
