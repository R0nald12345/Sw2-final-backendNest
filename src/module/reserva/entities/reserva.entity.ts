import { Viaje } from 'src/module/viaje/entities/viaje.entity';
import { Pasajero } from 'src/module/pasajero/entities/pasajero.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { EstadoReserva } from 'src/module/estado-reserva/entities/estado-reserva.entity';

@Entity('reservas')
export class Reserva {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  monto_total: number;

  @Column()
  punto_recogida: string;

  @Column()
  direccion_inicio: string;

  @Column('float')
  lat_recogida: number;

  @Column('float')
  lng_recogida: number;

  @Column('timestamp')
  fecha_confirmacion: Date;

  @Column('timestamp', { nullable: true })
  fecha_cancelacion: Date;

  @Column('timestamp')
  hora_reserva: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  update_at: Date;

  @ManyToOne(() => Viaje, viaje => viaje.reservas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'viaje_id' })
  viaje: Viaje;

  @ManyToOne(() => Pasajero, pasajero => pasajero.reservas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pasajero_id' })
  pasajero: Pasajero;

    @ManyToOne(() => EstadoReserva, estadoReserva => estadoReserva.reservas)
  @JoinColumn({ name: 'estado_reserva_id' })
  estadoReserva: EstadoReserva;
}