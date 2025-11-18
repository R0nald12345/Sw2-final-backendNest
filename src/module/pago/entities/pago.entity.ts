import { EstadoPago } from 'src/module/estado-pago/entities/estado-pago.entity';
import { TipoPago } from 'src/module/tipo-pago/entities/tipo-pago.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  monto: number;

  @Column()
  comprobante_foto_url: string;

  @Column('timestamp')
  fecha_pago: Date;

  @ManyToOne(() => TipoPago, tipoPago => tipoPago.pagos)
  @JoinColumn({ name: 'tipo_pago_id' })
  tipoPago: TipoPago;

  @ManyToOne(() => EstadoPago, estadoPago => estadoPago.pagos)
  @JoinColumn({ name: 'estado_pago_id' })
  estadoPago: EstadoPago;
}