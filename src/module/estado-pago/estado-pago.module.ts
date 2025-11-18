import { Module } from '@nestjs/common';
import { EstadoPagoService } from './estado-pago.service';
import { EstadoPagoController } from './estado-pago.controller';
import { EstadoPago } from './entities/estado-pago.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoPago])],
  controllers: [EstadoPagoController],
  providers: [EstadoPagoService],
})
export class EstadoPagoModule {}
