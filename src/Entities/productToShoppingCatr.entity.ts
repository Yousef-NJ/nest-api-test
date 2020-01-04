import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ShoppingCart } from './ShoppingCart.entity';
import { Product } from './product.entity';

@Entity()
export class ProductToShoppingCart {
    @PrimaryGeneratedColumn()
    public productToShoppingCart!: number;

    @ManyToOne(type => Product, product => product.productToShoppingCart)
    public product: Product;

    @ManyToOne(type => ShoppingCart, shoppingCart => shoppingCart.porductToShoppingCart)
    public shoppingCart: ShoppingCart;
}
