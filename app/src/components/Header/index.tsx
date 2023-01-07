import {Container} from './styles';
import {Text} from '../Text';

export function Header() {
  return (
    <Container>
      <Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
      <Text size={24} weight={'700'}>
        Waiter
        <Text size={24}>App</Text>
      </Text>
    </Container>
  );
}
