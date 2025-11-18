import { IsEmail, IsNotEmpty, MinLength, IsOptional, IsNumber, IsUUID } from 'class-validator';

export class CreateConductorDto {
  @IsNotEmpty({ message: 'Email institucional es requerido' })
  @IsEmail({}, { message: 'Email institucional debe ser válido' })
  email_institucional: string;

  @IsNotEmpty({ message: 'Contraseña es requerida' })
  @MinLength(8, { message: 'Contraseña debe tener mínimo 8 caracteres' })
  password: string;

  @IsNotEmpty({ message: 'Nombre completo es requerido' })
  nombre_completo: string;

  @IsNotEmpty({ message: 'Número de registro es requerido' })
  @IsNumber()
  numero_registro: number;

  @IsNotEmpty({ message: 'Tipo de usuario es requerido' })
  @IsUUID()
  tipo_usuario_id: string;

  @IsOptional()
  telefono?: string;

  @IsOptional()
  foto_perfil?: string;

  @IsOptional()
  documento_identidad?: string;

  @IsOptional()
  foto_licencia_conducir?: string;
}