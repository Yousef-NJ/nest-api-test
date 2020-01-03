import { Category } from './category';
enum Roles {
    main_admin = 'main_admin',
    sub_admin = 'sub_admin',
    user = 'user',
    }

export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  phone_number: string;
  Role: Roles;
  category: Category;
}
