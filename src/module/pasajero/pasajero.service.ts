import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pasajero } from './entities/pasajero.entity';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
import { UpdatePasajeroDto } from './dto/update-pasajero.dto';

@Injectable()
export class PasajeroService {
  constructor(
    @InjectRepository(Pasajero)
    private readonly pasajeroRepository: Repository<Pasajero>,
  ) {}

  create(createPasajeroDto: CreatePasajeroDto) {
    const pasajero = this.pasajeroRepository.create(createPasajeroDto);
    return this.pasajeroRepository.save(pasajero);
  }

  findAll() {
    return this.pasajeroRepository.find();
  }

  findOne(id: string) {
    return this.pasajeroRepository.findOne({ where: { id } });
  }

  update(id: string, updatePasajeroDto: UpdatePasajeroDto) {
    return this.pasajeroRepository.update(id, updatePasajeroDto);
  }

  remove(id: string) {
    return this.pasajeroRepository.delete(id);
  }
}