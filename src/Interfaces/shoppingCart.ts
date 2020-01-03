import { User } from './users';
import { Products } from './product';

export interface ShoppingCart {
  id: number;
  user: User;
  products: Products;
}
