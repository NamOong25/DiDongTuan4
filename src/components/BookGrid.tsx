import { View, Text, Image, StyleSheet } from 'react-native';

const books = [
  { id: 1, name: 'Nhà Giả Kim', price: '89.000đ' },
  { id: 2, name: 'Tuổi Trẻ Đáng Giá Bao Nhiêu', price: '95.000đ' },
  { id: 3, name: 'Đắc Nhân Tâm', price: '110.000đ' },
  { id: 4, name: 'Tôi Thấy Hoa Vàng', price: '85.000đ' },
];

export default function BookGrid() {
  return (
    <View style={styles.grid}>
      {books.map((book) => (
        <View style={styles.item} key={book.id}>

          <View style={styles.imageBox}>
            <Image
              source={{ uri: `https://picsum.photos/20${book.id}/300` }}
              style={styles.image}
            />

            <View style={styles.badge}>
              <Text style={styles.badgeText}>-20%</Text>
            </View>
          </View>

          <Text style={styles.name} numberOfLines={2}>
            {book.name}
          </Text>

          <Text style={styles.price}>{book.price}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    backgroundColor:"#fff",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  item: {
    width: '48%',
    marginBottom: 16,
  },

  imageBox: {
    position: 'relative',
  },

  image: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 8,
  },

  badge: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 4,
  },

  badgeText: {
    color: 'white',
    fontWeight: 'bold',
  },

  name: {
    fontWeight: 'bold',
    marginTop: 5,
  },

  price: {
    color: 'red',
    marginTop: 3,
  },
});