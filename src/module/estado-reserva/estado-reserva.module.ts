import { Module } from '@nestjs/common';
import { EstadoReservaService } from './estado-reserva.service';
import { EstadoReservaController } from './estado-reserva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoReserva } from './entities/estado-reserva.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoReserva])],
  controllers: [EstadoReservaController],
  providers: [EstadoReservaService],
})
export class EstadoReservaModule {}
