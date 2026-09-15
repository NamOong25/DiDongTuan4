import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { API } from '../api';
import type { User } from '../types';

export default function Bai10_UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(API.user);

        if (!response.ok) {
          throw new Error(`Lỗi HTTP: ${response.status}`);
        }

        const data = (await response.json()) as User;

        setUser(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Không thể tải người dùng');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  if (!user) {
    return null;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {user?.name}
      </Text>

      <Text>Tài khoản: {user?.username}</Text>
      <Text>Email: {user?.email}</Text>
      <Text>Điện thoại: {user?.phone}</Text>
      <Text>Thành phố: {user?.address?.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  error: {
    color: 'red',
    padding: 16,
  },
});