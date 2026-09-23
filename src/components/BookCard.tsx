import { View, Text, Image, StyleSheet } from 'react-native';

export default function BookCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.image}
      />

      <View style={styles.info}>
        <View>
          <Text style={styles.name} numberOfLines={2}>
            Nhà Giả Kim
          </Text>
          <Text>Paulo Coelho</Text>
        </View>

        <Text style={styles.price}>89.000đ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
  },

  image: {
    width: 80,
    height: 110,
    borderRadius: 6,
  },

  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
    height: 110,
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  price: {
    color: 'red',
    fontWeight: 'bold',
  },
});