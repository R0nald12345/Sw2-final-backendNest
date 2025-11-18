import { Pago } from 'src/module/pago/entities/pago.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { Pago } from './pago.entity';

@Entity('estado_pago')
export class EstadoPago {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @OneToMany(() => Pago, pago => pago.estadoPago)
  pagos: Pago[];
}
