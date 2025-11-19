import { Reporte } from 'src/module/reporte/entities/reporte.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('tipo_reporte')
export class TipoReporte {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @OneToMany(() => Reporte, reporte => reporte.tipoReporte)
  reportes: Reporte[];
}