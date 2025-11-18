import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { Vehiculo } from './entities/vehiculo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VehiculoService {
constructor(
    @InjectRepository(Vehiculo)
    private vehiculoRepository: Repository<Vehiculo>,
  ) {}

  async create(createVehiculoDto: CreateVehiculoDto): Promise<Vehiculo> {
    const vehiculo = this.vehiculoRepository.create(createVehiculoDto);
    return this.vehiculoRepository.save(vehiculo);
  }

  async findAll(): Promise<Vehiculo[]> {
    return this.vehiculoRepository.find({ relations: ['tipoVehiculo', 'viajes'] });
  }

  async findOne(id: string): Promise<Vehiculo> {
     const vehiculo = await this.vehiculoRepository.findOne({ where: { id }, relations: ['tipoVehiculo', 'viajes'] });
    if (!vehiculo) {
      throw new NotFoundException(`Vehículo con id ${id} no encontrado`);
    }
    return vehiculo;
  }

  async update(id: string, updateVehiculoDto: UpdateVehiculoDto): Promise<Vehiculo> {
   await this.findOne(id);
    await this.vehiculoRepository.update(id, updateVehiculoDto);
    return this.vehiculoRepository.findOne({ where: { id }, relations: ['tipoVehiculo', 'viajes'] }) as Promise<Vehiculo>;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id); // Valida que exista
    await this.vehiculoRepository.delete(id);
  }
}