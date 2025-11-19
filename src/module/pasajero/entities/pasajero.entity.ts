import { Reserva } from 'src/module/reserva/entities/reserva.entity';
import { Viaje } from 'src/module/viaje/entities/viaje.entity';
import { TipoUsuario } from 'src/module/tipo-usuario/entities/tipo-usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity('pasajero')
export class Pasajero {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numero_registro: number;

  @Column({ type: 'varchar', unique: true })
  email_institucional: string;

  @Column({ type: 'varchar', length: 50 })
  nombre_completo: string;

  @Column({ type: 'varchar', nullable: true })
  telefono: string;

  @Column({ type: 'varchar', nullable: true })
  telefono_emergencia: string;

  @Column({ type: 'varchar', nullable: true })
  foto_perfil: string;

  @Column({ type: 'varchar', nullable: true })
  documento_identidad: string;

  @Column({ type: 'varchar' })
  password: string;

  @ManyToOne(() => TipoUsuario, (tipoUsuario) => tipoUsuario.pasajeros)
  @JoinColumn({ name: 'tipo_usuario_id' })
  tipoUsuario: TipoUsuario;

  @Column({ type: 'uuid' })
  tipo_usuario_id: string;

  @OneToMany(() => Reserva, reserva => reserva.pasajero)
  reservas: Reserva[];

  @ManyToMany(() => Viaje, viaje => viaje.pasajeros)
  @JoinTable({
    name: 'reserva',
    joinColumn: { name: 'pasajero_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'viaje_id', referencedColumnName: 'id' },
  })
  viajes: Viaje[];
}