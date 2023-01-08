import styled from 'styled-components/native';

export const ProductContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;
export const ProductDetails = styled.View`
  margin-left: 16px;
  flex: 1;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  border: 1px solid rgba(204, 204, 204, 0.3);
  margin: 24px 0;
`;

export const AddToCartButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
`;
