import { Reserva } from 'src/module/reserva/entities/reserva.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('estados_reserva')
export class EstadoReserva {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  nombre: string;

  @Column({ type: 'varchar', nullable: true })
  motivo: string;


  @OneToMany(() => Reserva, reserva => reserva.estadoReserva)
  reservas: Reserva[];
}