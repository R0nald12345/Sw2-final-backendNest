import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Controller('reserva')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post()
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservaService.create(createReservaDto);
  }

  @Get()
  findAll() {
    return this.reservaService.findAll();
  }

  @Get('pasajero/:pasajero_id')
  findByPasajero(@Param('pasajero_id') pasajero_id: string) {
    return this.reservaService.findByPasajero(pasajero_id);
  }

  @Get('viaje/:viaje_id')
  findByViaje(@Param('viaje_id') viaje_id: string) {
    return this.reservaService.findByViaje(viaje_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservaDto: UpdateReservaDto) {
    return this.reservaService.update(id, updateReservaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservaService.remove(id);
  }
}