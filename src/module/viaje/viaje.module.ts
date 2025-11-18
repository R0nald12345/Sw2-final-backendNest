import { Module } from '@nestjs/common';
import { ViajeService } from './viaje.service';
import { ViajeController } from './viaje.controller';
import { Vehiculo } from '../vehiculo/entities/vehiculo.entity';
import { Viaje } from './entities/viaje.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Viaje, Vehiculo])],
  controllers: [ViajeController],
  providers: [ViajeService],
})
export class ViajeModule {}
