import { Pago } from 'src/module/pago/entities/pago.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { Pago } from './pago.entity';

@Entity('tipo_pago')
export class TipoPago {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @OneToMany(() => Pago, pago => pago.tipoPago)
  pagos: Pago[];
}
