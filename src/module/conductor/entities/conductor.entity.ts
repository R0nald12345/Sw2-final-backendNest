import { TipoUsuario } from 'src/module/tipo-usuario/entities/tipo-usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('conductor')

export class Conductor {

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
  foto_perfil: string;

  @Column({ type: 'varchar', nullable: true })
  documento_identidad: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar', nullable: true })
  foto_licencia_conducir: string;

  @ManyToOne(() => TipoUsuario, (tipoUsuario) => tipoUsuario.conductores)
  @JoinColumn({ name: 'tipo_usuario_id' })
  tipoUsuario: TipoUsuario;

  @Column({ type: 'uuid' })
  tipo_usuario_id: string;

}