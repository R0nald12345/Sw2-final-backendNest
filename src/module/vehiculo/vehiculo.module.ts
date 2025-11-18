import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';
import { Vehiculo } from './entities/vehiculo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo])],
  controllers: [VehiculoController],
  providers: [VehiculoService],
})
export class VehiculoModule {}
