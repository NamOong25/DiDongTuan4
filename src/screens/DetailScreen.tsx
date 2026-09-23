import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function DetailScreen() {
  return (
    <View style={styles.container}>

      <ScrollView style={styles.content}>

        <Image
          source={{ uri: 'https://picsum.photos/300/400' }}
          style={styles.image}
        />

        <Text style={styles.name}>Nhà Giả Kim</Text>
        <Text>Tác giả: Paulo Coelho</Text>

        <Text style={styles.price}>89.000đ</Text>

        <Text style={styles.description}>
          Nhà Giả Kim là một cuốn sách nổi tiếng kể về hành trình
          theo đuổi ước mơ và khám phá ý nghĩa cuộc sống.
          Nội dung cuốn sách mang đến nhiều bài học về sự kiên trì,
          niềm tin và việc theo đuổi mục tiêu của bản thân.
        </Text>

      </ScrollView>

      <View style={styles.bottom}>
        <Text style={styles.bottomPrice}>89.000đ</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Thêm vào giỏ</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 16,
  },

  image: {
    width: '60%',
    aspectRatio: 3 / 4,
    alignSelf: 'center',
    borderRadius: 8,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },

  price: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  description: {
    lineHeight: 22,
  },

  bottom: {
    height: 70,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },

  bottomPrice: {
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