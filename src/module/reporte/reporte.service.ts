import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { Reporte } from './entities/reporte.entity';

@Injectable()
export class ReporteService {
  constructor(
    @InjectRepository(Reporte)
    private reporteRepository: Repository<Reporte>,
  ) {}

  async create(createReporteDto: CreateReporteDto): Promise<Reporte> {
    const reporte = this.reporteRepository.create({
      ...createReporteDto,
      viaje: { id: createReporteDto.viaje_id },
      tipoReporte: { id: createReporteDto.tipo_reporte_id },
      gravedad: { id: createReporteDto.gravedad_id },
    });
    return this.reporteRepository.save(reporte);
  }

  async findAll(): Promise<Reporte[]> {
    return this.reporteRepository.find({ 
      relations: ['viaje', 'tipoReporte', 'gravedad'] 
    });
  }

  async findOne(id: string): Promise<Reporte> {
    const reporte = await this.reporteRepository.findOne({ 
      where: { id }, 
      relations: ['viaje', 'tipoReporte', 'gravedad'] 
    });
    if (!reporte) {
      throw new NotFoundException(`Reporte con id ${id} no encontrado`);
    }
    return reporte;
  }

  async update(id: string, updateReporteDto: UpdateReporteDto): Promise<Reporte> {
    await this.findOne(id);
    await this.reporteRepository.update(id, updateReporteDto);
    return this.reporteRepository.findOne({ 
      where: { id }, 
      relations: ['viaje', 'tipoReporte', 'gravedad'] 
    }) as Promise<Reporte>;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.reporteRepository.delete(id);
  }
}