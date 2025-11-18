import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoUsuarioDto {
  @IsNotEmpty({ message: 'Nombre es requerido' })
  @IsString({ message: 'Nombre debe ser un string' })
  nombre: string; // 'Pasajero', 'Conductor'
}