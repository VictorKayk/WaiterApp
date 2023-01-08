import {Modal} from 'react-native';
import {Button, Container} from './styles';
import {Text} from '../Text';
import {CheckCircle} from '../Icons/CheckCircle';
import {StatusBar} from 'expo-status-bar';

interface OrderConfirmedModalProps {
  visible: boolean;
  onConfirm() :void
}

export function OrderConfirmedModal({ visible, onConfirm }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
    >
      <StatusBar style={'light'} backgroundColor='#D73035' />

      <Container>
        <CheckCircle />

        <Text color='#fff' size={20} weight='600' style={{ marginTop: 12}}>Pedido Confirmado</Text>
        <Text color='#fff' opacity={0.9} style={{ marginTop: 4}}>O pedido já entrou na fila de produção!</Text>

        <Button onPress={onConfirm}>
          <Text color='#D73035' weight='600'>Ok</Text>
        </Button>
      </Container>
    </Modal>
  );
}
