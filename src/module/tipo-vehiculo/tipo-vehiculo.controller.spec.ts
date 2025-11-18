import { Test, TestingModule } from '@nestjs/testing';
import { TipoVehiculoController } from './tipo-vehiculo.controller';
import { TipoVehiculoService } from './tipo-vehiculo.service';

describe('TipoVehiculoController', () => {
  let controller: TipoVehiculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoVehiculoController],
      providers: [TipoVehiculoService],
    }).compile();

    controller = module.get<TipoVehiculoController>(TipoVehiculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
