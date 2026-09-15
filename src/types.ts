export type Post = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export type ProductApiResult = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type CustomError = {
  message: string;
  status?: number;
};

export interface ApiResponse<T> {
  data: T[];
  total: number;
  page: number;
}