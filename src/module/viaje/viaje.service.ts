import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ViajeService {
  constructor(
    @InjectRepository(Viaje)
    private viajeRepository: Repository<Viaje>,
  ) {}

  async create(createViajeDto: CreateViajeDto): Promise<Viaje> {
    const viaje = this.viajeRepository.create({
      ...createViajeDto,
      vehiculo: { id: createViajeDto.vehiculo_id },
    });
    return this.viajeRepository.save(viaje);
  }

  async findAll(): Promise<Viaje[]> {
    return this.viajeRepository.find({ 
      relations: ['vehiculo', 'reservas', 'reporte', 'reporte.tipoReporte', 'reporte.gravedad'] 
    });
  }

  async findOne(id: string): Promise<Viaje> {
    const viaje = await this.viajeRepository.findOne({ 
      where: { id }, 
      relations: ['vehiculo', 'reservas', 'reporte', 'reporte.tipoReporte', 'reporte.gravedad'] 
    });
    if (!viaje) {
      throw new NotFoundException(`Viaje con id ${id} no encontrado`);
    }
    return viaje;
  }

  async update(id: string, updateViajeDto: UpdateViajeDto): Promise<Viaje> {
    await this.findOne(id);
    await this.viajeRepository.update(id, updateViajeDto);
    return this.viajeRepository.findOne({ 
      where: { id }, 
      relations: ['vehiculo', 'reservas', 'reporte', 'reporte.tipoReporte', 'reporte.gravedad'] 
    }) as Promise<Viaje>;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.viajeRepository.delete(id);
  }
}