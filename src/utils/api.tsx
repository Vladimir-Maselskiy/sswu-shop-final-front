import { IOrderItems, IUser } from '../interfaces/interfaces';
const API = 'https://sswu-shop-final-back-deploy.onrender.com/api';
export const fetchProducts = async () => {
  try {
    const res = await fetch(`${API}/products`).then(res => res.json());
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewOrderToDB = async (
  user: IUser,
  orderItems: IOrderItems[],
  totalCost: number,
  discount: number
) => {
  try {
    const data = { user, orderItems, totalCost, discount };
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(`${API}/orders`, params).then(res => res.json());

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchOrders = async () => {
  try {
    const res = await fetch(`${API}/orders`).then(res => res.json());
    return res;
  } catch (error) {
    console.log(error);
  }
};
