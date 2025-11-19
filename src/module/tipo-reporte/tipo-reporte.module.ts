import { Module } from '@nestjs/common';
import { TipoReporteService } from './tipo-reporte.service';
import { TipoReporteController } from './tipo-reporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoReporte } from './entities/tipo-reporte.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TipoReporte])],
  controllers: [TipoReporteController],
  providers: [TipoReporteService],
})
export class TipoReporteModule {}
