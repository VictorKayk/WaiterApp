import {FlatList} from 'react-native';
import {products} from '../../mocks/products';
import {AddToCartButton, Image, Product, ProductDetails, Separator} from './styles';
import {Text} from '../Text';
import {formatCurrency} from '../../utils/formatCurrency';
import {PlusCircle} from '../Icons/PlusCircle';

export function Menu() {
  function handleProductPress(productId: string) {

  }

  return (
    <FlatList
      style={{ marginTop: 24 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      data={products}
      keyExtractor={({ _id }) => _id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product onPress={() => handleProductPress(product._id)}>
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/S997M49YPbW8m8zas3kENeYZPCdMdNTXYobIJUaFlow/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9jZG4u/ZS1rb25vbWlzdGEu/cHQvdXBsb2Fkcy8y/MDIwLzAzL3Bpenph/LWJpbWJ5LS5qcGc'
            }}
          />

          <ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text size={14} color="#666" style={{ marginVertical: 8 }}>{product.description}</Text>
            <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
          </ProductDetails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}/>
  );
}
