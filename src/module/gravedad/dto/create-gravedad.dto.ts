import { IsString } from 'class-validator';

export class CreateGravedadDto {
  @IsString()
  nombre: string;
}