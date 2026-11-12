import { Image, StyleSheet, Text, View } from 'react-native'

const BookCard = () => {
  return (
    <View style={styles.container} >
      
    <Image source={require("@/assets/images/biasach1.png")}
    style={styles.anh}></Image>

    <View style={styles.thongtinsach}>
        <View>
        <Text>Tên sách: Nhật ký thức ăn</Text>
        <Text>Tác giả: Lê Thế Anh</Text>
        </View>
        <Text>Giá: 99.000 VND</Text>
    </View>

    </View>
  )
}

    const styles= StyleSheet.create({
        container:{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "black",
            alignItems: "center"
        },
        anh:{
            width:80,
            height:110,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "black",
            marginRight: 20,
            marginLeft: 20

        },
        thongtinsach:{
            flex:1,
            flexDirection:"column",
            height: 100,
            justifyContent: "space-between"
        }
    })
export default BookCard