import { Test, TestingModule } from '@nestjs/testing';
import { SerivceService } from './serivce.service';

describe('SerivceService', () => {
  let service: SerivceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerivceService],
    }).compile();

    service = module.get<SerivceService>(SerivceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
