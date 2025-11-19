import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GravedadService } from './gravedad.service';
import { CreateGravedadDto } from './dto/create-gravedad.dto';
import { UpdateGravedadDto } from './dto/update-gravedad.dto';

@Controller('gravedad')
export class GravedadController {
  constructor(private readonly gravedadService: GravedadService) {}

  @Post()
  create(@Body() createGravedadDto: CreateGravedadDto) {
    return this.gravedadService.create(createGravedadDto);
  }

  @Get()
  findAll() {
    return this.gravedadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gravedadService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGravedadDto: UpdateGravedadDto) {
    return this.gravedadService.update(id, updateGravedadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gravedadService.remove(id);
  }
}