import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoReporteDto } from './dto/create-tipo-reporte.dto';
import { UpdateTipoReporteDto } from './dto/update-tipo-reporte.dto';
import { TipoReporte } from './entities/tipo-reporte.entity';

@Injectable()
export class TipoReporteService {
  constructor(
    @InjectRepository(TipoReporte)
    private tipoReporteRepository: Repository<TipoReporte>,
  ) {}

  async create(createTipoReporteDto: CreateTipoReporteDto): Promise<TipoReporte> {
    const tipoReporte = this.tipoReporteRepository.create(createTipoReporteDto);
    return this.tipoReporteRepository.save(tipoReporte);
  }

  async findAll(): Promise<TipoReporte[]> {
    return this.tipoReporteRepository.find({ relations: ['reportes'] });
  }

  async findOne(id: string): Promise<TipoReporte> {
    const tipoReporte = await this.tipoReporteRepository.findOne({
      where: { id },
      relations: ['reportes'],
    });
    if (!tipoReporte) {
      throw new NotFoundException(`TipoReporte con id ${id} no encontrado`);
    }
    return tipoReporte;
  }

  async update(id: string, updateTipoReporteDto: UpdateTipoReporteDto): Promise<TipoReporte> {
    await this.findOne(id);
    await this.tipoReporteRepository.update(id, updateTipoReporteDto);
    return this.tipoReporteRepository.findOne({
      where: { id },
      relations: ['reportes'],
    }) as Promise<TipoReporte>;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.tipoReporteRepository.delete(id);
  }
}