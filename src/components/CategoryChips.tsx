import { View, Text, StyleSheet } from 'react-native';

const categories = [
  'Văn học',
  'Kinh tế',
  'Thiếu nhi',
  'Kỹ năng sống',
  'Truyện tranh',
  'Ngoại ngữ',
];

export default function CategoryChips() {
  return (
    <View style={styles.container}>
      {categories.map((item) => (
        <View style={styles.chip} key={item}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 15,
  },

  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#1e3a8a',
    borderRadius: 20,
  },
});