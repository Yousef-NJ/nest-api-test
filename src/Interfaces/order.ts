import { Category } from './category';
import { User } from './users';
import { DiscountCode } from './discountCode';

enum orderStatus {
  Canceled,
  Delivered,
  Shipped,
  Processing,
  Waiting,
}

export interface Order {
  id: number;
  user: User;
  titleArabic: string;
  shippingAddress: string;
  billingAddress: string;
  paymentMethod: string;
  discount: number;
  totalPrice: number;
  Status: orderStatus;
  category: Category;
  discountCode: DiscountCode;
}
