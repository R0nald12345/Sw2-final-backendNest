import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoVehiculoDto } from './dto/create-tipo-vehiculo.dto';
import { UpdateTipoVehiculoDto } from './dto/update-tipo-vehiculo.dto';
import { TipoVehiculo } from './entities/tipo-vehiculo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoVehiculoService {
 constructor(
    @InjectRepository(TipoVehiculo)
    private tipoVehiculoRepository: Repository<TipoVehiculo>,
  ) {}

  async create(createTipoVehiculoDto: CreateTipoVehiculoDto): Promise<TipoVehiculo> {
    const tipoVehiculo = this.tipoVehiculoRepository.create(createTipoVehiculoDto);
    return this.tipoVehiculoRepository.save(tipoVehiculo);
  }

  async findAll(): Promise<TipoVehiculo[]> {
    return this.tipoVehiculoRepository.find({ relations: ['vehiculos'] });
  }

  async findOne(id: string): Promise<TipoVehiculo> {
    const tipoVehiculo = await this.tipoVehiculoRepository.findOne({ where: { id }, relations: ['vehiculos'] });
    if (!tipoVehiculo) {
      throw new NotFoundException(`Tipo de vehículo con id ${id} no encontrado`);
    }
    return tipoVehiculo;
  }

  async update(id: string, updateTipoVehiculoDto: UpdateTipoVehiculoDto): Promise<TipoVehiculo> {
    await this.findOne(id); // Valida que exista
    await this.tipoVehiculoRepository.update(id, updateTipoVehiculoDto);
    return this.tipoVehiculoRepository.findOne({ where: { id }, relations: ['vehiculos'] }) as Promise<TipoVehiculo>;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id); // Valida que exista
    await this.tipoVehiculoRepository.delete(id);
  }
}