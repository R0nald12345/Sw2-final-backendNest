import { IsString, IsNumber, IsUUID, IsDate } from 'class-validator';

export class CreateReservaDto {
  @IsNumber()
  monto_total: number;

  @IsString()
  punto_recogida: string;

  @IsString()
  direccion_inicio: string;

  @IsNumber()
  lat_recogida: number;

  @IsNumber()
  lng_recogida: number;

  @IsDate()
  hora_reserva: Date;

  @IsUUID()
  viaje_id: string;

  @IsUUID()
  pasajero_id: string;
}