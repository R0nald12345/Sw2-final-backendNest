import { Test, TestingModule } from '@nestjs/testing';
import { EstadoViajeController } from './estado-viaje.controller';
import { EstadoViajeService } from './estado-viaje.service';

describe('EstadoViajeController', () => {
  let controller: EstadoViajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoViajeController],
      providers: [EstadoViajeService],
    }).compile();

    controller = module.get<EstadoViajeController>(EstadoViajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
