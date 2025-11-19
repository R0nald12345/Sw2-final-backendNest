import { Module } from '@nestjs/common';
import { EstadoViajeService } from './estado-viaje.service';
import { EstadoViajeController } from './estado-viaje.controller';
import { EstadoViaje } from './entities/estado-viaje.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoViaje])],
  controllers: [EstadoViajeController],
  providers: [EstadoViajeService],
})
export class EstadoViajeModule {}
