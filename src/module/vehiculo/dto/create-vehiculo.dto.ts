import { IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateVehiculoDto {
  @IsString()
  modelo: string;

  @IsString()
  color: string;

  @IsString()
  anio: string;

  @IsInt()
  capacidad_asientos: number;

  @IsString()
  foto_lateral: string;

  @IsString()
  foto_frontal: string;

  @IsString()
  foto_interior: string;

  @IsBoolean()
  aire_acondicionado: boolean;

  @IsString()
  url_foto: string;

  @IsString()
  capacidad_pasajero: string;

  @IsString()
  tipo_vehiculo_id: string; // Type of the vehicle
}
