import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGravedadDto } from './dto/create-gravedad.dto';
import { UpdateGravedadDto } from './dto/update-gravedad.dto';
import { Gravedad } from './entities/gravedad.entity';

@Injectable()
export class GravedadService {
  constructor(
    @InjectRepository(Gravedad)
    private gravedadRepository: Repository<Gravedad>,
  ) {}

  async create(createGravedadDto: CreateGravedadDto): Promise<Gravedad> {
    const gravedad = this.gravedadRepository.create(createGravedadDto);
    return this.gravedadRepository.save(gravedad);
  }

  async findAll(): Promise<Gravedad[]> {
    return this.gravedadRepository.find({ relations: ['reportes'] });
  }

  async findOne(id: string): Promise<Gravedad> {
    const gravedad = await this.gravedadRepository.findOne({
      where: { id },
      relations: ['reportes'],
    });
    if (!gravedad) {
      throw new NotFoundException(`Gravedad con id ${id} no encontrado`);
    }
    return gravedad;
  }

  async update(id: string, updateGravedadDto: UpdateGravedadDto): Promise<Gravedad> {
    await this.findOne(id);
    await this.gravedadRepository.update(id, updateGravedadDto);
    return this.gravedadRepository.findOne({
      where: { id },
      relations: ['reportes'],
    }) as Promise<Gravedad>;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.gravedadRepository.delete(id);
  }
}