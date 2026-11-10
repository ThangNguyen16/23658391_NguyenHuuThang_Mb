import PaginationList from '@/components/PaginationList'
import { Link } from 'expo-router'
import { View } from 'react-native'

function bai14() {
  return (
    <View style={{ margin: 20 }}>
      <Link href={'/'} style={{ backgroundColor: 'pink', width: 100, borderColor: 'black', borderWidth: 1 }}>
        Trang chủ
      </Link>
      <PaginationList />
    </View>
  )
}

export default bai14