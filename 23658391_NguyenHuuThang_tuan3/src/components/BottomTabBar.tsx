import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, Text, View } from 'react-native';

const BottomTabBar = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.tabItem, { backgroundColor: '#e0e0ff' }]}>
            <Feather name="home" size={24} color="navy" />
            <Text style={{ color: 'navy', fontSize: 12 }}>Trang chủ</Text>
        </View>
        
        <View style={styles.tabItem}>
            <Feather name="grid" size={24} color="gray" />
            <Text style={{ color: 'gray', fontSize: 12 }}>Danh mục</Text>
        </View>

        <View style={styles.tabItem}>
            <Feather name="shopping-bag" size={24} color="gray" />
            <Text style={{ color: 'gray', fontSize: 12 }}>Giỏ hàng</Text>
        </View>

        <View style={styles.tabItem}>
            <Feather name="user" size={24} color="gray" />
            <Text style={{ color: 'gray', fontSize: 12 }}>Tài khoản</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: 'white',
    },
    tabItem: {
        flex: 1, // Chia đều 4 phần
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }
})

export default BottomTabBar