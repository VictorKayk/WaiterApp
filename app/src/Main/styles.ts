import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background-color: #fafafa
`;

export const CategoriesContainer = styled.View`
  margin-top: 34px;
  height: 73px;
`;

export const MenuContainer = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const Footer = styled.View`
  background-color: #fff;
  min-height: 110px;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView``;

export const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
