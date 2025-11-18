import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstadoReservaDto } from './dto/create-estado-reserva.dto';
import { UpdateEstadoReservaDto } from './dto/update-estado-reserva.dto';
import { EstadoReserva } from './entities/estado-reserva.entity';

@Injectable()
export class EstadoReservaService {
  constructor(
    @InjectRepository(EstadoReserva)
    private estadoReservaRepository: Repository<EstadoReserva>,
  ) {}

  async create(createEstadoReservaDto: CreateEstadoReservaDto): Promise<EstadoReserva> {
    const estadoReserva = this.estadoReservaRepository.create(createEstadoReservaDto);
    return this.estadoReservaRepository.save(estadoReserva);
  }

  async findAll(): Promise<EstadoReserva[]> {
    return this.estadoReservaRepository.find({ relations: ['reservas'] });
  }

  async findOne(id: string): Promise<EstadoReserva> {
    const estadoReserva = await this.estadoReservaRepository.findOne({
      where: { id },
      relations: ['reservas'],
    });
    if (!estadoReserva) {
      throw new NotFoundException(`EstadoReserva con id ${id} no encontrado`);
    }
    return estadoReserva;
  }

  async update(id: string, updateEstadoReservaDto: UpdateEstadoReservaDto): Promise<EstadoReserva> {
    await this.findOne(id);
    await this.estadoReservaRepository.update(id, updateEstadoReservaDto);
    return this.estadoReservaRepository.findOne({
      where: { id },
      relations: ['reservas'],
    }) as Promise<EstadoReserva>;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.estadoReservaRepository.delete(id);
  }
}