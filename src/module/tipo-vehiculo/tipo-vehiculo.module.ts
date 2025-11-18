import { Module } from '@nestjs/common';
import { TipoVehiculoService } from './tipo-vehiculo.service';
import { TipoVehiculoController } from './tipo-vehiculo.controller';
import { TipoVehiculo } from './entities/tipo-vehiculo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoVehiculo])],
  controllers: [TipoVehiculoController],
  providers: [TipoVehiculoService],
})
export class TipoVehiculoModule {}
