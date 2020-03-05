import { Test, TestingModule } from '@nestjs/testing';
import { ProductToOrderService } from './product-to-order.service';

describe('ProductToOrderService', () => {
  let service: ProductToOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductToOrderService],
    }).compile();

    service = module.get<ProductToOrderService>(ProductToOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
