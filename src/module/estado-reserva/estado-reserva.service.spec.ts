import { Test, TestingModule } from '@nestjs/testing';
import { EstadoReservaService } from './estado-reserva.service';

describe('EstadoReservaService', () => {
  let service: EstadoReservaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoReservaService],
    }).compile();

    service = module.get<EstadoReservaService>(EstadoReservaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
