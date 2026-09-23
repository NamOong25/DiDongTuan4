import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

import TabBar from '../components/TabBar';

const cart = [
  {
    id: 1,
    name: 'Nhà Giả Kim',
    quantity: 1,
    price: '89.000đ',
  },
  {
    id: 2,
    name: 'Đắc Nhân Tâm',
    quantity: 2,
    price: '110.000đ',
  },
  {
    id: 3,
    name: 'Tuổi Trẻ Đáng Giá Bao Nhiêu',
    quantity: 1,
    price: '95.000đ',
  },
];

export default function CartScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Giỏ hàng</Text>

      <ScrollView style={styles.list}>
        {cart.map((item) => (
          <View style={styles.item} key={item.id}>

            <Image
              source={{
                uri: `https://picsum.photos/10${item.id}/150`,
              }}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>Số lượng: {item.quantity}</Text>
            </View>

            <Text style={styles.price}>
              {item.price}
            </Text>

          </View>
        ))}
      </ScrollView>

      <View style={styles.total}>
        <Text style={styles.totalText}>
          Tổng: 404.000đ
        </Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Thanh toán
          </Text>
        </View>
      </View>

      <TabBar />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    flex: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 16,
  },

  list: {
    flex: 1,
    paddingHorizontal: 16,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#f3f4f6',
  },

  image: {
    width: 60,
    height: 80,
  },

  info: {
    flex: 1,
    marginLeft: 10,
  },

  name: {
    fontWeight: 'bold',
  },

  price: {
    width: 80,
    color: 'red',
  },

  total: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },

  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#1e3a8a',
    padding: 12,
    borderRadius: 6,
  },

  buttonText: {
    color: 'white',
  },
});