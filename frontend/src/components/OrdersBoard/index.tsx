import {Board, OrdersContainer} from './styles';
import {Order} from '../../Types/Order';
import {useState} from 'react';
import {OrdersModal} from '../OrdersModal';
import {api} from '../../utils/api';
import {toast} from 'react-toastify';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Array<Order> | [];
  onCancelOrder(orderId: string): void;
  onOrderStatusChange(orderId: string, status: Order['status']): void;
}
export function OrdersBoard({ icon, title, orders, onCancelOrder, onOrderStatusChange }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    setIsLoading(true);
    await api.delete(`orders/${selectedOrder?._id}`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);

    const message = selectedOrder?.status !== 'DONE' ?
      `O pedido da mesa ${selectedOrder?.table} foi cancelado!` :
      `O pedido da mesa ${selectedOrder?.table} foi deletado!`;
    toast.success(message);
  }

  async function handleOrderStatusChange() {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`orders/${selectedOrder?._id}`, {
      status
    });

    onOrderStatusChange(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalVisible(false);
    toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`);
  }

  return (
    <Board>
      <OrdersModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={() => handleCloseModal()}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        onOrderStatusChange={handleOrderStatusChange}
      />

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
