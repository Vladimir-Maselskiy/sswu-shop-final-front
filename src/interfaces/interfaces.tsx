export interface IProduct {
  _id: string;
  group: string;
  image: string;
  name: string;
  price: number;
  discount: number;
  timestamps: number;
  rate: number;
  mainProductInfo: string;
  description: string;
  additionalInfo: string;
  createdAt: string;
  updatedAt: string;
}

export interface IOrderItem {
  product: IProduct;
  quantity: number;
}
export interface IUser {
  name: string;
  email: string;
  address: string;
  phone: string;
  message: string;
}
export interface IOrderItems {
  productId: string;
  name: string;
  image: string;
  price: number;
  discount: number;
  rate: number;
  quantity: number;
}
