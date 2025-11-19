import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstadoViaje } from './entities/estado-viaje.entity';
import { CreateEstadoViajeDto } from './dto/create-estado-viaje.dto';
import { UpdateEstadoViajeDto } from './dto/update-estado-viaje.dto';

@Injectable()
export class EstadoViajeService {
  constructor(
    @InjectRepository(EstadoViaje)
    private readonly estadoViajeRepository: Repository<EstadoViaje>,
  ) {}

  async create(createEstadoViajeDto: CreateEstadoViajeDto) {
    const estadoViaje = this.estadoViajeRepository.create(createEstadoViajeDto);
    return await this.estadoViajeRepository.save(estadoViaje);
  }

  async findAll() {
    return await this.estadoViajeRepository.find({ relations: ['viajes'] });
  }

  async findOne(id: string) {
    const estadoViaje = await this.estadoViajeRepository.findOne({
      where: { id },
      relations: ['viajes'],
    });
    if (!estadoViaje) {
      throw new NotFoundException(`EstadoViaje con id ${id} no encontrado`);
    }
    return estadoViaje;
  }

  async update(id: string, updateEstadoViajeDto: UpdateEstadoViajeDto) {
    await this.findOne(id);
    await this.estadoViajeRepository.update(id, updateEstadoViajeDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.estadoViajeRepository.delete(id);
    return { message: `EstadoViaje ${id} eliminado` };
  }
}