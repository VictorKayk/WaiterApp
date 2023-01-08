import {CartItem} from '../../types/CartItem';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Actions, Image, Item, ProductContainer, QuantityContainer, Summary} from './styles';
import {Text} from '../Text';
import {formatCurrency} from '../../utils/formatCurrency';
import {PlusCircle} from '../Icons/PlusCircle';
import {MinusCircle} from '../Icons/MinusCircle';
import {Button} from '../Button';
import {Product} from '../../types/product';
import {useState} from 'react';
import {OrderConfirmedModal} from '../OrderConfirmedModal';

interface CartProps {
  cartItems: Array<CartItem>
  onAdd(product: Product): void;
  onRemove(product: Product): void;
  onConfirmOrder(): void;
}

export function Cart({ cartItems, onAdd, onRemove, onConfirmOrder }: CartProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const total = cartItems.reduce((prev, item) => {
    return prev + (item.quantity * item.product.price);
  }, 0);

  function handleConfirm() {
    onConfirmOrder();
    setIsModalOpen(false);
  }

  return (
    <>
      <OrderConfirmedModal visible={isModalOpen} onConfirm={handleConfirm} />

      {cartItems.length > 0 && (
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
                <TouchableOpacity style={{marginRight: 24}} onPress={() => onAdd(cartItem.product)}>
                  <PlusCircle />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onRemove(cartItem.product)}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}

      <Summary>
        <View style={{marginRight: 32, flex: 1}}>
          {cartItems.length > 0 && (
            <>
              <Text color='#666'>Total</Text>
              <Text size={20} weight='600'>{formatCurrency(total)}</Text>
            </>
          )}

          {cartItems.length === 0 && (
            <Text color='#999'>O carrinho esta vazio</Text>
          )}
        </View>

        <Button
          onPress={() => setIsModalOpen(true)}
          disabled={cartItems.length === 0}
          isLoading={isLoading}
        >
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}
