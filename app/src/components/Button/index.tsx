import {Container} from './styles';
import {Text} from '../Text';

interface ButtonProps {
  children: string;
  onPress(): void;
  disabled?: boolean;
}
export function Button({ children, disabled, onPress }: ButtonProps) {
  return (
    <Container onPress={() => onPress()} disabled={disabled}>
      <Text weight="600" color="#fff">{children}</Text>
    </Container>
  );
}
