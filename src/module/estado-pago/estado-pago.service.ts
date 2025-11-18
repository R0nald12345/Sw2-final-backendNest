import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstadoPagoDto } from './dto/create-estado-pago.dto';
import { UpdateEstadoPagoDto } from './dto/update-estado-pago.dto';
import { EstadoPago } from './entities/estado-pago.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoPagoService {
  constructor(
    @InjectRepository(EstadoPago)
    private estadoPagoRepository: Repository<EstadoPago>,
  ) {}

  async create(createEstadoPagoDto: CreateEstadoPagoDto): Promise<EstadoPago> {
    const estadoPago = this.estadoPagoRepository.create(createEstadoPagoDto);
    return this.estadoPagoRepository.save(estadoPago);
  }

  async findAll(): Promise<EstadoPago[]> {
    return this.estadoPagoRepository.find({ relations: ['pagos'] });
  }

  async findOne(id: string): Promise<EstadoPago> {
    const estadoPago = await this.estadoPagoRepository.findOne({ where: { id }, relations: ['pagos'] });
    if (!estadoPago) {
      throw new NotFoundException(`EstadoPago con id ${id} no encontrado`);
    }
    return estadoPago;
  }

  async update(id: string, updateEstadoPagoDto: UpdateEstadoPagoDto): Promise<EstadoPago> {
    await this.findOne(id);
    await this.estadoPagoRepository.update(id, updateEstadoPagoDto);
    return this.estadoPagoRepository.findOne({ where: { id }, relations: ['pagos'] }) as Promise<EstadoPago>;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.estadoPagoRepository.delete(id);
  }
}