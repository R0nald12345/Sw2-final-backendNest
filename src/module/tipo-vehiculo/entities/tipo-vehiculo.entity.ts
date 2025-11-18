import { Vehiculo } from 'src/module/vehiculo/entities/vehiculo.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class TipoVehiculo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  

  @OneToMany(() => Vehiculo, vehiculo => vehiculo.tipoVehiculo)
  vehiculos: Vehiculo[];
}