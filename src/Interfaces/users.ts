import { Category } from './category';
enum Roles {
  main_admin = 'main_admin',
  sub_admin = 'sub_admin',
  user = 'user',
}
export enum Status {
  active = 'active',
  blocked = 'blocked',
}
export interface User {
  id: number;
  username: string;
  email: string;
  country: string;
  password: string;
  confirmPassword: string;
  mobile: string;
  status: Status;
  Role: Roles;
  category: Category;
}
