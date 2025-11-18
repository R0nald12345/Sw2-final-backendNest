import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoPagoService } from './estado-pago.service';
import { CreateEstadoPagoDto } from './dto/create-estado-pago.dto';
import { UpdateEstadoPagoDto } from './dto/update-estado-pago.dto';

@Controller('estado-pago')
export class EstadoPagoController {
  constructor(private readonly estadoPagoService: EstadoPagoService) {}

  @Post()
  create(@Body() createEstadoPagoDto: CreateEstadoPagoDto) {
    return this.estadoPagoService.create(createEstadoPagoDto);
  }

  @Get()
  findAll() {
    return this.estadoPagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoPagoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoPagoDto: UpdateEstadoPagoDto) {
    return this.estadoPagoService.update(id, updateEstadoPagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoPagoService.remove(id);
  }
}