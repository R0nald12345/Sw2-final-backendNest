import { EstadoViaje } from 'src/module/estado-viaje/entities/estado-viaje.entity';
import { Reporte } from 'src/module/reporte/entities/reporte.entity';
import { Reserva } from 'src/module/reserva/entities/reserva.entity';
import { Pasajero } from 'src/module/pasajero/entities/pasajero.entity';
import { Vehiculo } from 'src/module/vehiculo/entities/vehiculo.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, ManyToMany } from 'typeorm';

@Entity('viaje')
export class Viaje {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  lat_inicio: number;

  @Column('float')
  lon_inicio: number;

  @Column()
  direccion_inicio: string;

  @Column('float')
  lat_destino: number;

  @Column('float')
  lon_destino: number;

  @Column()
  direccion_destino: string;

  @Column('timestamp')
  fecha_hora_salida: Date;

  @Column('int')
  duracion_estimada_min: number;

  @Column('float')
  distancia_km: number;

  @Column('int')
  asientos_totales: number;

  @Column('int')
  asientos_disponibles: number;

  @Column('float')
  precio_por_asiento: number;

  @Column()
  notas_conductor: string;

  @Column('boolean')
  acepta_equipaje: boolean;

  @Column('timestamp')
  hora_inicio_real: Date;

  @Column()
  codigo_viaje: string;

  @Column('timestamp')
  hora_fin_real: Date;

  @ManyToOne(() => EstadoViaje, estadoViaje => estadoViaje.viajes)
  estadoViaje: EstadoViaje;

  @ManyToOne(() => Vehiculo, vehiculo => vehiculo.viajes)
  vehiculo: Vehiculo;

  @OneToMany(() => Reserva, reserva => reserva.viaje)
  reservas: Reserva[];

  @ManyToMany(() => Pasajero, pasajero => pasajero.viajes)
  pasajeros: Pasajero[];

  @OneToOne(() => Reporte, reporte => reporte.viaje, { nullable: true })
  reporte: Reporte;
}