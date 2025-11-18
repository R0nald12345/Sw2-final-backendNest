import { Conductor } from 'src/module/conductor/entities/conductor.entity';
import { Pasajero } from 'src/module/pasajero/entities/pasajero.entity';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

@Entity('tipos_usuario')
export class TipoUsuario {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  nombre: string; // 'Estudiante', 'Administrativo', 'Docente'
  
  @OneToMany(() => Pasajero, (pasajero) => pasajero.tipoUsuario)
  pasajeros: Pasajero[];

  @OneToMany(() => Conductor, (conductor) => conductor.tipoUsuario)
  conductores: Conductor[];

}
