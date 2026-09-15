import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { API } from '../api';
import type {
  ApiResponse,
  Product,
  ProductApiResult
} from '../types';

const LIMIT = 10;

async function fetchProductPage(
  page: number
): Promise<ApiResponse<Product>> {
  const skip = (page - 1) * LIMIT;

  const response = await fetch(
    `${API.products}?limit=${LIMIT}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error(`Lỗi HTTP: ${response.status}`);
  }

  const rawData =
    (await response.json()) as ProductApiResult;

  return {
    data: rawData.products,
    total: rawData.total,
    page: page,
  };
}

export default function Bai14_PaginationResponse() {
  const [result, setResult] =
    useState<ApiResponse<Product>>({
      data: [],
      total: 0,
      page: 1,
    });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadPage = async (page: number) => {
    try {
      setLoading(true);
      setError('');

      const data = await fetchProductPage(page);

      setResult(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Không thể tải trang');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPage(1);
  }, []);

  const totalPages =
    Math.ceil(result.total / LIMIT);

  return (
    <View style={styles.container}>
      <Text style={styles.page}>
        Trang {result.page}/{totalPages || 1}
        {' - '}
        Tổng {result.total} sản phẩm
      </Text>

      {loading && (
        <ActivityIndicator size="large" />
      )}

      {error !== '' && (
        <Text style={styles.error}>{error}</Text>
      )}

      {!loading && error === '' && (
        <FlatList
          data={result.data}
          keyExtractor={(item) =>
            item.id.toString()
          }
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>
                {item.title}
              </Text>

              <Text>Giá: ${item.price}</Text>
            </View>
          )}
        />
      )}

      <View style={styles.buttons}>
        <Button
          title="Trang trước"
          onPress={() =>
            loadPage(result.page - 1)
          }
          disabled={
            loading || result.page <= 1
          }
        />

        <Button
          title="Trang sau"
          onPress={() =>
            loadPage(result.page + 1)
          }
          disabled={
            loading || result.page >= totalPages
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:"#fff"
  },

  page: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  item: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
  },

  title: {
    fontWeight: 'bold',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  error: {
    color: 'red',
  },
});