import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TipoUsuarioModule } from './module/tipo-usuario/tipo-usuario.module';
import { AuthModule } from './module/auth/auth.module';
import { PasajeroModule } from './module/pasajero/pasajero.module';
import { ConductorModule } from './module/conductor/conductor.module';
import { AdministradorModule } from './module/administrador/administrador.module';
import { VehiculoModule } from './module/vehiculo/vehiculo.module';
import { TipoVehiculoModule } from './module/tipo-vehiculo/tipo-vehiculo.module';
import { ViajeModule } from './module/viaje/viaje.module';
import { EstadoPagoModule } from './module/estado-pago/estado-pago.module';
import { TipoPagoModule } from './module/tipo-pago/tipo-pago.module';
import { PagoModule } from './module/pago/pago.module';
import { ReservaModule } from './module/reserva/reserva.module';
import { EstadoReservaModule } from './module/estado-reserva/estado-reserva.module';
import { ReporteModule } from './module/reporte/reporte.module';
import { TipoReporteModule } from './module/tipo-reporte/tipo-reporte.module';
import { GravedadModule } from './module/gravedad/gravedad.module';
import { EstadoViajeModule } from './module/estado-viaje/estado-viaje.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfig,
      inject: [ConfigService],
    }),
    AuthModule,
    TipoUsuarioModule,
    PasajeroModule,
    ConductorModule,
    AdministradorModule,
    VehiculoModule,
    TipoVehiculoModule,
    ViajeModule,
    EstadoPagoModule,
    TipoPagoModule,
    PagoModule,
    ReservaModule,
    EstadoReservaModule,
    ReporteModule,
    TipoReporteModule,
    GravedadModule,
    EstadoViajeModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    },
  ],
})
export class AppModule {}

