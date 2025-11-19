import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoViajeService } from './estado-viaje.service';
import { CreateEstadoViajeDto } from './dto/create-estado-viaje.dto';
import { UpdateEstadoViajeDto } from './dto/update-estado-viaje.dto';

@Controller('estado-viaje')
export class EstadoViajeController {
  constructor(private readonly estadoViajeService: EstadoViajeService) {}

  @Post()
  create(@Body() createEstadoViajeDto: CreateEstadoViajeDto) {
    return this.estadoViajeService.create(createEstadoViajeDto);
  }

  @Get()
  findAll() {
    return this.estadoViajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoViajeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoViajeDto: UpdateEstadoViajeDto) {
    return this.estadoViajeService.update(id, updateEstadoViajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoViajeService.remove(id);
  }
}