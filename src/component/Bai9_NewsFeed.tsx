import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { API } from '../api';
import type { Post } from '../types';

export default function Bai9_NewsFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(API.todos);

        if (!response.ok) {
          throw new Error(`Lỗi HTTP: ${response.status}`);
        }

        const data = (await response.json()) as Post[];

        setPosts(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Không thể tải dữ liệu');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>

          <Text>
            {item.completed
              ? 'Đã hoàn thành'
              : 'Chưa hoàn thành'}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },

  item: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
  },

  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },

  error: {
    color: 'red',
    padding: 16,
  },
});