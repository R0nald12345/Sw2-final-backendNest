import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoPagoDto } from './dto/create-tipo-pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo-pago.dto';
import { TipoPago } from './entities/tipo-pago.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoPagoService {
  constructor(
    @InjectRepository(TipoPago)
    private tipoPagoRepository: Repository<TipoPago>,
  ) {}

  async create(createTipoPagoDto: CreateTipoPagoDto): Promise<TipoPago> {
    const tipoPago = this.tipoPagoRepository.create(createTipoPagoDto);
    return this.tipoPagoRepository.save(tipoPago);
  }

  async findAll(): Promise<TipoPago[]> {
    return this.tipoPagoRepository.find({ relations: ['pagos'] });
  }

  async findOne(id: string): Promise<TipoPago> {
    const tipoPago = await this.tipoPagoRepository.findOne({ where: { id }, relations: ['pagos'] });
    if (!tipoPago) {
      throw new NotFoundException(`TipoPago con id ${id} no encontrado`);
    }
    return tipoPago;
  }

  async update(id: string, updateTipoPagoDto: UpdateTipoPagoDto): Promise<TipoPago> {
    await this.findOne(id);
    await this.tipoPagoRepository.update(id, updateTipoPagoDto);
    return this.tipoPagoRepository.findOne({ where: { id }, relations: ['pagos'] }) as Promise<TipoPago>;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.tipoPagoRepository.delete(id);
  }
}