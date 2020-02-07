import { Test, TestingModule } from '@nestjs/testing';
import { ProductToShoppingCartController } from './product-to-shopping-cart.controller';

describe('ProductToShoppingCart Controller', () => {
  let controller: ProductToShoppingCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductToShoppingCartController],
    }).compile();

    controller = module.get<ProductToShoppingCartController>(ProductToShoppingCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
