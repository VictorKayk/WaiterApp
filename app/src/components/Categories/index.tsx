import {categories} from '../../mocks/categories';
import {Category, Icon} from './styles';
import {Text} from '../Text';
import {FlatList} from 'react-native';
import {useState} from 'react';

export function Categories() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  function handleSelectCategory(categoryId: string) {
    setSelectedCategoryId((prev) => prev === categoryId ? '' : categoryId);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={({_id}) => _id}
      contentContainerStyle={{ paddingRight: 24 }}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategoryId === category._id;
        return (
          <Category onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>
            <Text size={14} weight={'600'}  opacity={isSelected ? 1 : 0.5}>{category.name}</Text>
          </Category>
        );
      }}
    />
  );
}
