import { Image, StyleSheet, Text, View } from 'react-native'

const dssp=[ {
    ten: "Đắc Nhân Tâm",
    gia: 89000,
    hinh: require("@/assets/images/sachDacNhanTam.png")
  },
  {
    ten: "Nhà Giả Kim",
    gia: 79000,
    hinh: require("@/assets/images/sachHaiConMeo.png")
  },
  {
    ten: "Tuổi Trẻ Đáng Giá",
    gia: 99000,
    hinh: require("@/assets/images/image.png")
  },
  {
    ten: "Cà Phê Cùng Tony",
    gia: 85000,
    hinh: require("@/assets/images/image1.png")
  }]

const BookGrid = () => {
  return (
    <View style={styles.container} >
      {dssp.map((item,index)=>(
        <View key={index} style={styles.card}>
            <Image source={item.hinh} style={styles.image}></Image>
            <View style={styles.tenvagia}>
                <Text>
                    {item.ten} - {item.gia}
                </Text>
            </View>
        </View>
      ))}
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
      flexDirection:"row",
      flexWrap: "wrap",
      justifyContent:"space-between",
      
    },
    card:{
        height: 150,
        width: "47%",
        borderWidth: 1,
        borderColor: "navy",
        margin: 5
        
    },
    image:{
        aspectRatio: 4/3,
        height: 100,
        width: "100%",
        marginBottom: 5,
        borderWidth: 1,
        borderColor: "navy"
    },
    tenvagia:{
      justifyContent:"center",
      alignItems: "center",
      flex:1
    }
})
export default BookGrid