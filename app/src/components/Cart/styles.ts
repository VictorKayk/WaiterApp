import styled from 'styled-components/native';

export const Item = styled.View`
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 48px;
  height: 40px;
  border-radius: 6px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const QuantityContainer = styled.View`
  min-width: 20px;
  margin-left: 12px;
`;

export const Summary = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
