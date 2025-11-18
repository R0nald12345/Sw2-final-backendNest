import { IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreateAdministradorDto {
  @IsNotEmpty({ message: 'Email es requerido' })
  @IsEmail({}, { message: 'Email debe ser válido' })
  email: string;

  @IsNotEmpty({ message: 'Contraseña es requerida' })
  @MinLength(8, { message: 'Contraseña debe tener mínimo 8 caracteres' })
  password: string;

  @IsOptional()
  nombre?: string;

  @IsOptional()
  telefono?: string;
}
