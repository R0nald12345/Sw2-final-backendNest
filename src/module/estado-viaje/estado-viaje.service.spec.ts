import { Test, TestingModule } from '@nestjs/testing';
import { EstadoViajeService } from './estado-viaje.service';

describe('EstadoViajeService', () => {
  let service: EstadoViajeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoViajeService],
    }).compile();

    service = module.get<EstadoViajeService>(EstadoViajeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
