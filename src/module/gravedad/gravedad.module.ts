import { Module } from '@nestjs/common';
import { GravedadService } from './gravedad.service';
import { GravedadController } from './gravedad.controller';
import { Gravedad } from './entities/gravedad.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Gravedad])],
  controllers: [GravedadController],
  providers: [GravedadService],
})
export class GravedadModule {}
