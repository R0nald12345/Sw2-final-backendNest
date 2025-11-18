import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PagoService {
constructor(
    @InjectRepository(Pago)
    private pagoRepository: Repository<Pago>,
  ) {}

  async create(createPagoDto: CreatePagoDto): Promise<Pago> {
    const pago = this.pagoRepository.create(createPagoDto);
    return this.pagoRepository.save(pago);
  }

  async findAll(): Promise<Pago[]> {
    return this.pagoRepository.find({ relations: ['tipoPago', 'estadoPago'] });
  }

  async findOne(id: string): Promise<Pago> {
    const pago = await this.pagoRepository.findOne({ where: { id }, relations: ['tipoPago', 'estadoPago'] });
    if (!pago) {
      throw new NotFoundException(`Pago with id ${id} not found`);
    }
    return pago;
  }

  async update(id: string, updatePagoDto: UpdatePagoDto): Promise<Pago> {
    await this.findOne(id);
    await this.pagoRepository.update(id, updatePagoDto);
    return this.pagoRepository.findOne({ where: { id }, relations: ['tipoPago', 'estadoPago'] }) as Promise<Pago>;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.pagoRepository.delete(id);
  }
}