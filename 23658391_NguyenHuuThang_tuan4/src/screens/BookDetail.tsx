import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BookDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Phần nội dung cuộn được */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
        <Image 
            source={require("@/assets/images/biasach1.png")} 
            style={styles.image}
        />
        <View style={styles.content}>
            <Text style={styles.title}>Nhật Ký Thức Ăn</Text>
            <Text style={styles.author}>Tác giả: Lê Thế Anh</Text>
            <Text style={styles.price}>99.000 VND</Text>
            
            <Text style={styles.descTitle}>Mô tả sản phẩm:</Text>
            <Text style={styles.desc}>
                Đây là một cuốn sách rất hay về ẩm thực và dinh dưỡng. 
                Sách cung cấp nhiều kiến thức bổ ích cho người đọc...
                (Nội dung mô tả dài để test tính năng cuộn).
            </Text>
            {/* Tạo thêm text dài để test scroll */}
            <Text style={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
        </View>
      </ScrollView>

      {/* Thanh cố định dưới cùng */}
      <View style={styles.bottomBar}>
        <View>
            <Text style={{ color: 'gray', fontSize: 12 }}>Tổng tiền</Text>
            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>99.000 VND</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Thêm vào giỏ</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    image: {
        width: '50%',
        aspectRatio: 3/4,
        alignSelf: 'center', 
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    content: {
        padding: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'navy',
        marginBottom: 5
    },
    author: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10
    },
    price: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 20
    },
    descTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    desc: {
        fontSize: 14,
        lineHeight: 22,
        color: '#333',
        marginBottom: 15
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        
    },
    button: {
        backgroundColor: 'navy',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8
    }
})

export default BookDetail