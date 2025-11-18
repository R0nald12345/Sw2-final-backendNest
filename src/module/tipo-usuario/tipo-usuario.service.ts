import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoUsuario } from './entities/tipo-usuario.entity';
import { CreateTipoUsuarioDto } from './dto/create-tipo-usuario.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateTipoUsuarioDto } from './dto/update-tipo-usuario.dto';

@Injectable()
export class TipoUsuarioService {
  constructor(
    @InjectRepository(TipoUsuario)
    private tipoUsuarioRepository: Repository<TipoUsuario>,
  ) {}

  async create(createTipoUsuarioDto: CreateTipoUsuarioDto) {
    const tipoUsuario = this.tipoUsuarioRepository.create({
      id: uuidv4(),
      ...createTipoUsuarioDto,
    });
    return await this.tipoUsuarioRepository.save(tipoUsuario);
  }

  async findAll() {
    return await this.tipoUsuarioRepository.find();
  }

  async findOne(id: string) {
    return await this.tipoUsuarioRepository.findOne({ where: { id } });
  }

  async update(id: string, updateTipoUsuarioDto: UpdateTipoUsuarioDto) {
    await this.tipoUsuarioRepository.update(id, updateTipoUsuarioDto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    await this.tipoUsuarioRepository.delete(id);
    return { message: 'Tipo de usuario eliminado' };
  }
}
