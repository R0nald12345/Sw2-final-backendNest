import { IsString } from 'class-validator';

export class CreateTipoVehiculoDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;
}
