import { StyleSheet, Text, View } from 'react-native'

const mangChip=["Văn học", "Kinh tế", "Thiếu nhi", "Truyện tranh", "Ngoại ngữ", "Lịch sử"]

const CategoryChips = () => {
  return (
    <View style={styles.container}>
      {mangChip.map((item,index)=>(
        <View style={styles.items} key={index}>
            <Text  style={{color:"navy"}}>{item}</Text>
        </View>
      ))}
    </View>
  )
}

const styles= StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        justifyContent:"center"
    },
    items:{

        width: "30%",
        paddingHorizontal:10,
        paddingVertical: 10,
        gap: 8,
        borderColor: "navy",
        borderWidth: 1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 25,
        
    }
})

export default CategoryChips