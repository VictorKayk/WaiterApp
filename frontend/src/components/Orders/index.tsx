import {Container} from './styles';
import {OrdersBoard} from '../OrdersBoard';
import {Order} from '../../Types/Order';
import {useEffect, useState} from 'react';
import {api} from '../../utils/api';
import socket from 'socket.io-client';

export function Orders() {
  const [orders, setOrders] = useState<Order[] | []>([]);

  useEffect(() => {
    api.get('orders').then(({ data }) => setOrders(data));
  });

  useEffect(() => {
    const io = socket('http://localhost:5000', {
      transports: ['websocket']
    });
    io.on('order@new', (order) => setOrders(prev => prev.concat(order)))
  }, []);

  const waiting = orders.filter(({ status }) => status === 'WAITING');
  const inProduction = orders.filter(({ status }) => status === 'IN_PRODUCTION');
  const done = orders.filter(({ status }) => status === 'DONE');

  function handleCancelOrder(orderId: string) {
    setOrders((prev) => prev.filter(({_id}) => _id !== orderId));
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prev) => prev.map((order) => {
      if (order._id !== orderId) return {
        ...order,
        status
      };

      return order;
    }));
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onOrderStatusChange={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onOrderStatusChange={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onOrderStatusChange={handleOrderStatusChange}
      />
    </Container>
  );
}
