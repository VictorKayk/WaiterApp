import styled from 'styled-components/native';
import {Platform} from 'react-native';

const isAndroid = Platform.OS === 'android';

export const CategoryContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: 24px;
`;
export const Icon = styled.View`
  align-items: center;
  justify-content: center;

  background-color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-bottom: 8px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, ${isAndroid ? 1: 0.1});
  elevation: 2;
`;
