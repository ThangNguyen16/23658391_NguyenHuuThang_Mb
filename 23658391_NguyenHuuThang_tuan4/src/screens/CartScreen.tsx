import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BottomTabBar from './BottomTabBar'

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Vùng 1: Danh sách sản phẩm (Cuộn được) */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        
        {/* Sản phẩm 1 */}
        <View style={styles.cartItem}>
            <Image source={require("@/assets/images/biasach1.png")} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>Nhật Ký Thức Ăn</Text>
                <Text style={{ color: 'red' }}>99.000 đ</Text>
                <Text style={{ color: 'gray', fontSize: 12 }}>Số lượng: 1</Text>
            </View>
        </View>

        {/* Sản phẩm 2 */}
        <View style={styles.cartItem}>
            <Image source={require("@/assets/images/sachDacNhanTam.png")} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>Đắc Nhân Tâm</Text>
                <Text style={{ color: 'red' }}>89.000 đ</Text>
                <Text style={{ color: 'gray', fontSize: 12 }}>Số lượng: 2</Text>
            </View>
        </View>

        {/* Sản phẩm 3 (Copy thêm cho dài để test scroll) */}
        <View style={styles.cartItem}>
            <Image source={require("@/assets/images/sachHaiConMeo.png")} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>Nhà Giả Kim</Text>
                <Text style={{ color: 'red' }}>79.000 đ</Text>
                <Text style={{ color: 'gray', fontSize: 12 }}>Số lượng: 1</Text>
            </View>
        </View>

      </ScrollView>

      {/* Vùng 2: Tổng tiền + Thanh toán (Cố định) */}
      <View style={styles.checkoutBar}>
        <View>
            <Text style={{ color: 'gray', fontSize: 12 }}>Tổng tiền:</Text>
            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>267.000 đ</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Thanh toán</Text>
        </TouchableOpacity>
      </View>

      {/* Vùng 3: Tab Bar (Cố định) */}
      <BottomTabBar />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center'
    },
    itemImage: {
        width: 60,
        height: 80,
        borderRadius: 5,
        marginRight: 15
    },
    itemInfo: {
        flex: 1, // Chiếm hết phần còn lại
        gap: 5
    },
    checkoutBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    },
    button: {
        backgroundColor: 'navy',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 8
    }
})

export default CartScreen