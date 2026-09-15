import { useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { API } from '../api';
import type { CustomError } from '../types';

export default function Bai12_ApiErrorHandling() {
  const [message, setMessage] =
    useState('Chưa gửi request');

  const callWrongApi = async () => {
    try {
      setMessage('Đang gọi API...');

      const response = await fetch(API.wrongUrl);

      if (!response.ok) {
        const apiError: CustomError = {
          message: 'Không tìm thấy đường dẫn API',
          status: response.status,
        };

        throw apiError;
      }

      setMessage('Gọi API thành công');
    } catch (error: unknown) {
      const customError = error as CustomError;

      const text =
        `${customError.message} ` +
        `(status: ${customError.status ?? 'không có'})`;

      setMessage(text);

      Alert.alert('Lỗi API', text);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Gọi API sai để kiểm tra lỗi"
        onPress={callWrongApi}
      />

      <Text style={styles.message}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor:"#fff"
  },

  message: {
    marginTop: 16,
  },
});