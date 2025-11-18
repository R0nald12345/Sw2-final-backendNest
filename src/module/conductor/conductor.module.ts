import { Module } from '@nestjs/common';
import { ConductorService } from './conductor.service';
import { ConductorController } from './conductor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conductor } from './entities/conductor.entity';
import { TipoUsuario } from '../tipo-usuario/entities/tipo-usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Conductor,TipoUsuario])],
  controllers: [ConductorController],
  providers: [ConductorService],
})
export class ConductorModule {}
