import { View, Text, StyleSheet } from 'react-native';

export default function FloatingCart() {
  return (
    <View style={styles.cart}>
      <Text style={styles.icon}>🛒</Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1e3a8a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 25,
  },

  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: 'red',
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },

  badgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});