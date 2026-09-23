import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import Header from '../components/Header';
import CategoryChips from '../components/CategoryChips';
import BookGrid from '../components/BookGrid';
import FloatingCart from '../components/FloatingCart';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Header />

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Danh mục</Text>
        <CategoryChips />

        <Text style={styles.title}>Sách nổi bật</Text>
        <BookGrid />
      </ScrollView>

      <FloatingCart />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
  },

  scrollContent: {
    paddingBottom: 100,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
  },
});