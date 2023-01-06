import {Board, OrdersContainer} from './styles';
import {Order} from '../../Types/Order';
import {useState} from 'react';
import {OrdersModal} from '../OrdersModal';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Array<Order>;
}
export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrdersModal visible={isModalVisible} order={selectedOrder} onClose={() => handleCloseModal()}/>

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>
                Mesa {order.table}
              </strong>
              <span>
                {order.products.length} pedidos
              </span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
