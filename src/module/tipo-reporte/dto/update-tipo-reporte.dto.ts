import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoReporteDto } from './create-tipo-reporte.dto';

export class UpdateTipoReporteDto extends PartialType(CreateTipoReporteDto) {}
