import { TipoVehiculo } from 'src/module/tipo-vehiculo/entities/tipo-vehiculo.entity';
import { Viaje } from 'src/module/viaje/entities/viaje.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity('vehiculos')
export class Vehiculo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  modelo: string;

  @Column()
  color: string;

  @Column()
  anio: string;

  @Column()
  capacidad_asientos: number;

  @Column()
  foto_lateral: string;

  @Column()
  foto_frontal: string;

  @Column()
  foto_interior: string;

  @Column()
  aire_acondicionado: boolean;

  @Column()
  url_foto: string;

  @Column()
  capacidad_pasajero: string;

  @ManyToOne(() => TipoVehiculo, tipoVehiculo => tipoVehiculo.vehiculos)
  @JoinColumn({ name: 'tipo_vehiculo_id' })
  tipoVehiculo: TipoVehiculo;

  @OneToMany(() => Viaje, viaje => viaje.vehiculo)
  viajes: Viaje[];
}
