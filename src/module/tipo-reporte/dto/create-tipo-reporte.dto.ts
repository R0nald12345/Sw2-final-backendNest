import { IsString } from 'class-validator';

export class CreateTipoReporteDto {
  @IsString()
  nombre: string;
}