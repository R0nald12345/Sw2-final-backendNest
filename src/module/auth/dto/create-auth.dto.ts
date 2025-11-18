import { IsEmail, IsNotEmpty, MinLength, IsEnum, IsOptional, IsNumber } from 'class-validator';

export class RegisterDto {
  @IsOptional()
  @IsEmail({}, { message: 'Email debe ser válido' })
  email?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email institucional debe ser válido' })
  email_institucional?: string;

  @IsNotEmpty({ message: 'Contraseña es requerida' })
  @MinLength(8, { message: 'Contraseña debe tener mínimo 8 caracteres' })
  password: string;

  @IsOptional()
  nombre?: string;

  @IsOptional()
  nombre_completo?: string;

  @IsOptional()
  @IsNumber()
  numero_registro?: number;

  @IsNotEmpty({ message: 'Tipo de usuario es requerido' })
  @IsEnum(['ADMINISTRADOR', 'PASAJERO', 'CONDUCTOR'], {
    message: 'Tipo debe ser ADMINISTRADOR, PASAJERO o CONDUCTOR',
  })
  tipo: 'ADMINISTRADOR' | 'PASAJERO' | 'CONDUCTOR';
}

export class LoginDto {
  @IsNotEmpty({ message: 'Email es requerido' })
  @IsEmail({}, { message: 'Email debe ser válido' })
  email: string;

  @IsNotEmpty({ message: 'Contraseña es requerida' })
  @MinLength(8, { message: 'Contraseña debe tener mínimo 8 caracteres' })
  password: string;

  @IsNotEmpty({ message: 'Tipo de usuario es requerido' })
  @IsEnum(['ADMINISTRADOR', 'PASAJERO', 'CONDUCTOR'], {
    message: 'Tipo debe ser ADMINISTRADOR, PASAJERO o CONDUCTOR',
  })
  tipo: 'ADMINISTRADOR' | 'PASAJERO' | 'CONDUCTOR';
}