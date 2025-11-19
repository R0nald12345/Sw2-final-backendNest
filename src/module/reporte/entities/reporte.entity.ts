import { Gravedad } from 'src/module/gravedad/entities/gravedad.entity';
import { TipoReporte } from 'src/module/tipo-reporte/entities/tipo-reporte.entity';
import { Viaje } from 'src/module/viaje/entities/viaje.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';

@Entity('reporte')
export class Reporte {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  evidencia_foto_url: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  fecha_reporte: Date;

  @OneToOne(() => Viaje, viaje => viaje.reporte)
  @JoinColumn({ name: 'viaje_id' })
  viaje: Viaje;

  @ManyToOne(() => TipoReporte, tipoReporte => tipoReporte.reportes)
  @JoinColumn({ name: 'tipo_reporte_id' })
  tipoReporte: TipoReporte;

  @ManyToOne(() => Gravedad, gravedad => gravedad.reportes)
  @JoinColumn({ name: 'gravedad_id' })
  gravedad: Gravedad;
}