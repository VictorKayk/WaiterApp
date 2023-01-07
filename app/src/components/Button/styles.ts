import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ disabled }) => disabled ? '#999' : '#d73035'};
  padding: 16px 24px;
  border-radius: 48px;
  align-items: center;
  justify-content: center;
`;
