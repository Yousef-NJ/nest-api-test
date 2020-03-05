import { Test, TestingModule } from '@nestjs/testing';
import { ProductToOrderController } from './product-to-order.controller';

describe('ProductToOrder Controller', () => {
  let controller: ProductToOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductToOrderController],
    }).compile();

    controller = module.get<ProductToOrderController>(ProductToOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
