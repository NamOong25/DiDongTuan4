import { View, Text, StyleSheet } from 'react-native';

export default function TabBar() {
  return (
    <View style={styles.tabBar}>
      <View style={styles.tab}>
        <Text>🏠</Text>
        <Text style={styles.active}>Trang chủ</Text>
      </View>

      <View style={styles.tab}>
        <Text>📚</Text>
        <Text>Danh mục</Text>
      </View>

      <View style={styles.tab}>
        <Text>🛒</Text>
        <Text>Giỏ hàng</Text>
      </View>

      <View style={styles.tab}>
        <Text>👤</Text>
        <Text>Tài khoản</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 65,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },

  tab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  active: {
    color: '#1e3a8a',
    fontWeight: 'bold',
  },
});