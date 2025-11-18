import { Module } from '@nestjs/common';
import { PasajeroService } from './pasajero.service';
import { PasajeroController } from './pasajero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasajero } from './entities/pasajero.entity';
import { TipoUsuario } from '../tipo-usuario/entities/tipo-usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pasajero,TipoUsuario])],
  controllers: [PasajeroController],
  providers: [PasajeroService],
})
export class PasajeroModule {}
