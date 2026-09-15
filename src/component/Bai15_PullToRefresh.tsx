import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { API } from '../api';
import type {
  Product,
  ProductApiResult
} from '../types';

export default function Bai15_PullToRefresh() {
  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] =
    useState(false);

  const [error, setError] = useState('');
  const [lastUpdated, setLastUpdated] =
    useState('');

  const fetchProducts = async (
    isRefresh = false
  ) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError('');

      const response = await fetch(
        `${API.products}?limit=20`
      );

      if (!response.ok) {
        throw new Error(
          `Lỗi HTTP: ${response.status}`
        );
      }

      const data =
        (await response.json()) as ProductApiResult;

      setProducts(data.products);

      setLastUpdated(
        new Date().toLocaleTimeString('vi-VN')
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Không thể tải dữ liệu');
      }
    } finally {
      if (isRefresh) {
        setRefreshing(false);
      } else {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) =>
        item.id.toString()
      }
      contentContainerStyle={styles.list}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => fetchProducts(true)}
        />
      }
      ListHeaderComponent={
        <View>
          <Text style={styles.updated}>
            Cập nhật lúc: {lastUpdated}
          </Text>

          {error !== '' && (
            <Text style={styles.error}>
              {error}
            </Text>
          )}
        </View>
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
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },

  updated: {
    marginBottom: 10,
    fontWeight: 'bold',
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

  error: {
    color: 'red',
    marginBottom: 10,
  },
});