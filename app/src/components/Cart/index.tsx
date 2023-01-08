import {CartItem} from '../../types/CartItem';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Actions, Image, Item, ProductContainer, QuantityContainer, Summary} from './styles';
import {Text} from '../Text';
import {formatCurrency} from '../../utils/formatCurrency';
import {PlusCircle} from '../Icons/PlusCircle';
import {MinusCircle} from '../Icons/MinusCircle';
import {Button} from '../Button';

interface CartProps {
  cartItems: Array<CartItem>
}

export function Cart({ cartItems }: CartProps) {
  return (
    <>
      <FlatList
        data={cartItems}
        keyExtractor={({product}) => product._id}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20, maxHeight: 150 }}
        renderItem={({item: cartItem}) => (
          <Item>
            <ProductContainer>
              <Image
                source={{
                  uri: 'https://imgs.search.brave.com/S997M49YPbW8m8zas3kENeYZPCdMdNTXYobIJUaFlow/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9jZG4u/ZS1rb25vbWlzdGEu/cHQvdXBsb2Fkcy8y/MDIwLzAzL3Bpenph/LWJpbWJ5LS5qcGc'
                }}
              />
              <QuantityContainer>
                <Text size={14} color='#666'>{cartItem.quantity}x</Text>
              </QuantityContainer>
              <View>
                <Text size={14} weight='600'>{cartItem.product.name}</Text>
                <Text size={14} color='#666' style={{marginTop: 4}}>{formatCurrency(cartItem.product.price)}</Text>
              </View>
            </ProductContainer>

            <Actions>
              <TouchableOpacity style={{marginRight: 24}}>
                <PlusCircle />
              </TouchableOpacity>
              <TouchableOpacity>
                <MinusCircle />
              </TouchableOpacity>
            </Actions>
          </Item>
        )}
      />

      <Summary>
        <View>
          {cartItems.length > 0 && (
            <>
              <Text color='#666'>Total</Text>
              <Text size={20} weight='600'>{formatCurrency(120)}</Text>
            </>
          )}

          {cartItems.length === 0 && (
            <Text color='#999'>O carrinho esta vazio</Text>
          )}
        </View>

        <Button onPress={() => console.log('oi')}>
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}
