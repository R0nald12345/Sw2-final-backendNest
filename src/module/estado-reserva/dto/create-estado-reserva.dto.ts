import { IsString, IsOptional } from 'class-validator';

export class CreateEstadoReservaDto {
  @IsString()
  nombre: string;

  @IsString()
  @IsOptional()
  motivo?: string;

}