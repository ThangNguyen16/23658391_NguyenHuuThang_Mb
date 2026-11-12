import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Image, StyleSheet, View } from 'react-native';
const Header = () => {
  return (
    <View style={styles.container}>
    <View>
      <Image 
      source={require("@/assets/images/logo.png")}
      style={{height: 40, width: 150, borderRadius:15}}
      ></Image>
    </View>
    
    <View style={styles.timvagio}>
        <Feather name="search" size={24} color="white"/>

        <AntDesign name="shopping-cart" size={24} color="white" />    
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: "navy",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 56,
        paddingLeft:16,
        paddingRight:16
    },
    timvagio: {
        flexDirection:"row",
        justifyContent: "space-around",
        gap: 8

    },
    mauchu:{
        color: "white"
    }
}) 

export default Header