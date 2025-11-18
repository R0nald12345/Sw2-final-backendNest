import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrador } from './entities/administrador.entity';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';


@Injectable()
export class AdministradorService {
  constructor(
    @InjectRepository(Administrador)
    private readonly administradorRepository: Repository<Administrador>,
  ) {}

  create(createAdministradorDto: CreateAdministradorDto) {
    const admin = this.administradorRepository.create(createAdministradorDto);
    return this.administradorRepository.save(admin);
  }

  findAll() {
    return this.administradorRepository.find();
  }

  findOne(id: string) {
    return this.administradorRepository.findOne({ where: { id } });
  }

  update(id: string, updateAdministradorDto: UpdateAdministradorDto) {
    return this.administradorRepository.update(id, updateAdministradorDto);
  }

  remove(id: string) {
    return this.administradorRepository.delete(id);
  }
}