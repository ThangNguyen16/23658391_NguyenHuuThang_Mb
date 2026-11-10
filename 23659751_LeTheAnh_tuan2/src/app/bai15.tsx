import RefreshList from '@/components/RefreshList'
import { Link } from 'expo-router'
import { View } from 'react-native'

function bai15() {
  return (
    <View style={{ margin: 20 }}>
      <Link href={'/'} style={{ backgroundColor: 'pink', width: 100, borderColor: 'black', borderWidth: 1 }}>
        Trang chủ
      </Link>
      <RefreshList />
    </View>
  )
}

export default bai15