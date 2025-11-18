import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conductor } from './entities/conductor.entity';
import { CreateConductorDto } from './dto/create-conductor.dto';
import { UpdateConductorDto } from './dto/update-conductor.dto';

@Injectable()
export class ConductorService {
  constructor(
    @InjectRepository(Conductor)
    private readonly conductorRepository: Repository<Conductor>,
  ) {}

  create(createConductorDto: CreateConductorDto) {
    const conductor = this.conductorRepository.create(createConductorDto);
    return this.conductorRepository.save(conductor);
  }

  findAll() {
    return this.conductorRepository.find();
  }

  findOne(id: string) {
    return this.conductorRepository.findOne({ where: { id } });
  }

  update(id: string, updateConductorDto: UpdateConductorDto) {
    return this.conductorRepository.update(id, updateConductorDto);
  }

  remove(id: string) {
    return this.conductorRepository.delete(id);
  }
}