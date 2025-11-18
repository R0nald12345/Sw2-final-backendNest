import { Test, TestingModule } from '@nestjs/testing';
import { EstadoReservaController } from './estado-reserva.controller';
import { EstadoReservaService } from './estado-reserva.service';

describe('EstadoReservaController', () => {
  let controller: EstadoReservaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoReservaController],
      providers: [EstadoReservaService],
    }).compile();

    controller = module.get<EstadoReservaController>(EstadoReservaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
