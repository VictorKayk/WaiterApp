import {CategoriesContainer, Container, Footer, FooterContainer, MenuContainer} from './styles';
import {Header} from '../components/Header';
import {Categories} from '../components/Categories';
import {Button} from '../components/Button';
import {Menu} from '../components/Menu';
import {TableModal} from '../components/TableModal';
import {useState} from 'react';
import {Cart} from '../components/Cart';
import {CartItem} from '../types/CartItem';
import {products} from '../mocks/products';

export function  Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<Array<CartItem> | []>([
    // {
    //   product: products[0],
    //   quantity: 3
    // }, {
    //   product: products[1],
    //   quantity: 5
    // }
  ]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={() => setSelectedTable('')}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>Novo Pedido</Button>
          )}

          {selectedTable && (
            <Cart cartItems={cartItems} />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
