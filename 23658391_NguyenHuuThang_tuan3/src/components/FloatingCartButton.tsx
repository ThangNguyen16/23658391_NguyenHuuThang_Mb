import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FloatingCartButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign name="shopping-cart" size={30} color="white" />
      {/* Badge số lượng */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>4</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 80, // Đẩy lên cao hơn Tab Bar (sẽ làm ở Giờ 5)
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30, // Bo tròn
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Đổ bóng trên Android
        shadowColor: '#000', // Đổ bóng trên iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    badge: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
        width: 22,
        height: 22,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white'
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    }
})

export default FloatingCartButton