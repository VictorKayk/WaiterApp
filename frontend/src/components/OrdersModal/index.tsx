import {Actions, ModalBody, OrderDetails, Overlay} from './styles';
import close from '../../assets/images/close-icon.svg';
import {Order} from '../../Types/Order';
import {formatCurrency} from '../../utils/formatCurrency';
import {useEffect} from 'react';
interface OrdersModalProps {
  visible: boolean;
  order: Order | null;
  onClose(): void;
  onCancelOrder(): void;
  isLoading: boolean;
  onOrderStatusChange(): void;
}
export function OrdersModal({ visible, order, onClose, onCancelOrder, isLoading, onOrderStatusChange }: OrdersModalProps) {
  if (!visible || !order) return null;

  const total = order.products.reduce((prev, current) => {
    return prev + current.quantity * current.product.price;
  }, 0);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={() => onClose()}>
            <img src={close} alt="close icon"/>
          </button>
        </header>

        <div className="status-details">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-itens">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://192.168.100.11:5000/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="58"
                  height="28.51"
                />

                <div className="quantity">{quantity}x</div>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button type="button" className="primary" disabled={isLoading} onClick={onOrderStatusChange}>
              <span>
                {order.status === 'WAITING' && '👩‍🍳'}
                {order.status === 'IN_PRODUCTION' && '☑️'}
              </span>
              <strong>
                {order.status === 'WAITING' && 'Iniciar preparação'}
                {order.status === 'IN_PRODUCTION' && 'Concluir pedido'}
              </strong>
            </button>
          )}

          <button type="button" className="secondary" onClick={onCancelOrder} disabled={isLoading}>
            {order.status !== 'DONE' ? 'Cancelar pedido' : 'Deletar pedido'}
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
