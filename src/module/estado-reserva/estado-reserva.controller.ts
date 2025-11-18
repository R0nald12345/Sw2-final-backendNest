import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoReservaService } from './estado-reserva.service';
import { CreateEstadoReservaDto } from './dto/create-estado-reserva.dto';
import { UpdateEstadoReservaDto } from './dto/update-estado-reserva.dto';

@Controller('estado-reserva')
export class EstadoReservaController {
  constructor(private readonly estadoReservaService: EstadoReservaService) {}

  @Post()
  create(@Body() createEstadoReservaDto: CreateEstadoReservaDto) {
    return this.estadoReservaService.create(createEstadoReservaDto);
  }

  @Get()
  findAll() {
    return this.estadoReservaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoReservaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoReservaDto: UpdateEstadoReservaDto) {
    return this.estadoReservaService.update(id, updateEstadoReservaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoReservaService.remove(id);
  }
}