import { IsString, IsUUID } from 'class-validator';

export class CreateReporteDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsString()
  evidencia_foto_url: string;

  @IsUUID()
  viaje_id: string;

  @IsUUID()
  tipo_reporte_id: string;

  @IsUUID()
  gravedad_id: string;
}