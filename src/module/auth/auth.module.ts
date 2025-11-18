import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Administrador } from '../administrador/entities/administrador.entity';
import { Pasajero } from '../pasajero/entities/pasajero.entity';
import { Conductor } from '../conductor/entities/conductor.entity';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Administrador, Pasajero, Conductor]),
    JwtModule.register({
      secret: 'tu_clave_secreta_super_segura_uagrm_yango_2025',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtModule],
})
export class AuthModule {}