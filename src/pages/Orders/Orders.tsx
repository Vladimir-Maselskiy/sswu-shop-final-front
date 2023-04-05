import React from 'react';
import { useEffect, useState } from 'react';
import { Container } from '../../components/Container/Container';
import { fetchOrders } from '../../utils/api';
import './Orders.scss';

export const Orders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  useEffect(() => {
    fetchOrders().then(res => setOrders(res));
  }, []);
  return (
    <Container className="orders">
      <>
        {orders.map(order => (
          <div key={order._id}>
            <p>{JSON.stringify(order.user)}</p>
            {order.orderItems.map((item: any) => {
              return <p key={item.productId}>{JSON.stringify(item)}</p>;
            })}
            <p>{order.totalCost}</p>
            <p>{order.discount}</p>
          </div>
        ))}
      </>
    </Container>
  );
};
