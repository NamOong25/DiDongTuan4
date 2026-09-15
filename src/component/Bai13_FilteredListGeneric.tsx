import { useMemo, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

type Book = {
  id: number;
  name: string;
  price: number;
};

function filterByName<T extends { name: string }>(
  items: T[],
  keyword: string
): T[] {
  const normalizedKeyword =
    keyword.trim().toLowerCase();

  return items.filter((item) =>
    item.name
      .toLowerCase()
      .includes(normalizedKeyword)
  );
}

const books: Book[] = [
  {
    id: 1,
    name: 'Lập trình TypeScript',
    price: 120000,
  },
  {
    id: 2,
    name: 'React Native cơ bản',
    price: 150000,
  },
  {
    id: 3,
    name: 'JavaScript hiện đại',
    price: 130000,
  },
];

export default function Bai13_FilteredListGeneric() {
  const [keyword, setKeyword] = useState('');

  const filteredBooks = useMemo(
    () => filterByName(books, keyword),
    [keyword]
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Nhập tên sách"
      />

      <Text>
        Kết quả: {filteredBooks.length} sách
      </Text>

      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.item}>
            Không tìm thấy sách
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>
              {item.name}
            </Text>

            <Text>
              {item.price.toLocaleString('vi-VN')}đ
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:"#fff"
  },

  input: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },

  item: {
    padding: 12,
    marginTop: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
  },

  title: {
    fontWeight: 'bold',
  },
});