import { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { API } from '../api';
import type {
  Product,
  ProductApiResult
} from '../types';

async function fetchProducts(
  keyword: string,
  limit: number
): Promise<Product[]> {
  const url =
    `${API.productSearch}?q=${encodeURIComponent(keyword)}&limit=${limit}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Lỗi HTTP: ${response.status}`);
  }

  const data = (await response.json()) as ProductApiResult;

  return data.products;
}

export default function Bai11_ProductSearch() {
  const [keyword, setKeyword] = useState('phone');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError('');

      const result = await fetchProducts(
        keyword.trim(),
        10
      );

      setProducts(result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Tìm kiếm thất bại');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Nhập tên sản phẩm"
        onSubmitEditing={handleSearch}
      />

      <Button
        title="Tìm kiếm"
        onPress={handleSearch}
        disabled={loading}
      />

      {loading && (
        <ActivityIndicator
          style={styles.space}
          size="large"
        />
      )}

      {error !== '' && (
        <Text style={styles.error}>{error}</Text>
      )}

      {!loading &&
        error === '' &&
        products.length === 0 && (
          <Text style={styles.space}>
            Chưa có kết quả. Hãy nhấn Tìm kiếm.
          </Text>
        )}

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text>Giá: ${item.price}</Text>
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

  space: {
    marginTop: 16,
  },

  error: {
    color: 'red',
    marginTop: 16,
  },
});