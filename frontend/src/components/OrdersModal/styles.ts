import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  padding: 32px;
  background: #FFF;
  border-radius: 8px;
  width: 480px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }
  .status-details {
    display: flex;
    flex-direction: column;
    gap: 8px;

    small {
      opacity: 0.8;
      font-size: 14px;
    }

    div {
      display: flex;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-itens {
    .item {
      display: flex;

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }

    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .primary {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    background-color: #333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 12px 24px;
  }

  .secondary {
    padding: 12px 24px;
    background-color: transparent;
    border: 0;
    font-weight: bold;
    color: #d73035;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
