import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '../redux/cartSlice';
import { RootState } from '../redux/store';

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 45 },
  { id: 3, name: 'Keyboard', price: 120 },
];

function ShoppingCart() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giỏ hàng</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>
              {item.name} (${item.price}) x{item.quantity}
            </Text>

            <TouchableOpacity onPress={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>
              <Text>  -  </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>
              <Text>  +  </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
              <Text>  Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity onPress={() => dispatch(addToCart(PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)]))}>
        <Text>+ Thêm sản phẩm</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(clearCart())}>
        <Text>Xóa giỏ</Text>
      </TouchableOpacity>

      <Text style={styles.total}>Tổng: ${total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  item: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  name: { flex: 1 },
  total: { marginTop: 20, fontSize: 18, fontWeight: 'bold' },
});

export default ShoppingCart;