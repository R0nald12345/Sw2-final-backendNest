import { Viaje } from 'src/module/viaje/entities/viaje.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('estado_viaje')
export class EstadoViaje {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @OneToMany(() => Viaje, viaje => viaje.estadoViaje)
  viajes: Viaje[];
}