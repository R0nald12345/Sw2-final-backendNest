import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva } from './entities/reserva.entity';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepository: Repository<Reserva>,
  ) {}

  async create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    const reserva = this.reservaRepository.create({
      ...createReservaDto,
      viaje: { id: createReservaDto.viaje_id },
      pasajero: { id: createReservaDto.pasajero_id },
      fecha_confirmacion: new Date(),
    });
    return this.reservaRepository.save(reserva);
  }

  async findAll(): Promise<Reserva[]> {
    return this.reservaRepository.find({ 
      relations: ['viaje', 'viaje.vehiculo', 'pasajero'] 
    });
  }

  async findOne(id: string): Promise<Reserva> {
    const reserva = await this.reservaRepository.findOne({ 
      where: { id }, 
      relations: ['viaje', 'viaje.vehiculo', 'pasajero'] 
    });
    if (!reserva) {
      throw new NotFoundException(`Reserva con id ${id} no encontrada`);
    }
    return reserva;
  }

  async update(id: string, updateReservaDto: UpdateReservaDto): Promise<Reserva> {
    await this.findOne(id);
    await this.reservaRepository.update(id, updateReservaDto);
    return this.reservaRepository.findOne({ 
      where: { id }, 
      relations: ['viaje', 'viaje.vehiculo', 'pasajero'] 
    }) as Promise<Reserva>;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.reservaRepository.delete(id);
  }

  async findByPasajero(pasajero_id: string): Promise<Reserva[]> {
    return this.reservaRepository.find({
      where: { pasajero: { id: pasajero_id } },
      relations: ['viaje', 'viaje.vehiculo', 'pasajero'],
    });
  }

  async findByViaje(viaje_id: string): Promise<Reserva[]> {
    return this.reservaRepository.find({
      where: { viaje: { id: viaje_id } },
      relations: ['viaje', 'viaje.vehiculo', 'pasajero'],
    });
  }
}