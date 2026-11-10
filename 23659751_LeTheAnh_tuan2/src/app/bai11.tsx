import ProductSearch from '@/components/ProductSearch'
import { Link } from 'expo-router'
import { View } from 'react-native'

function bai11() {
  return (
    <View style={{ margin: 20 }}>
      <Link href={'/'} style={{ backgroundColor: 'pink', width: 100, borderColor: 'black', borderWidth: 1 }}>
        Trang chủ
      </Link>
      <ProductSearch />
    </View>
  )
}

export default bai11