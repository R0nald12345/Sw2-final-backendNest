import { IsString, IsInt, IsBoolean, IsDate, IsNumber, IsUUID } from 'class-validator';

export class CreateViajeDto {
  @IsNumber()
  lat_inicio: number;

  @IsNumber()
  lon_inicio: number;

  @IsString()
  direccion_inicio: string;

  @IsNumber()
  lat_destino: number;

  @IsNumber()
  lon_destino: number;

  @IsString()
  direccion_destino: string;

  @IsDate()
  fecha_hora_salida: Date;

  @IsInt()
  duracion_estimada_min: number;

  @IsNumber()
  distancia_km: number;

  @IsInt()
  asientos_totales: number;

  @IsInt()
  asientos_disponibles: number;

  @IsNumber()
  precio_por_asiento: number;

  @IsString()
  notas_conductor: string;

  @IsBoolean()
  acepta_equipaje: boolean;

  @IsDate()
  hora_inicio_real: Date;

  @IsString()
  codigo_viaje: string;

  @IsDate()
  hora_fin_real: Date;

  @IsUUID()
  vehiculo_id: string;
}