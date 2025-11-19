import { Reporte } from 'src/module/reporte/entities/reporte.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('gravedades')
export class Gravedad {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @OneToMany(() => Reporte, reporte => reporte.gravedad)
  reportes: Reporte[];
}