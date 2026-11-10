import ErrorHandling from '@/components/ErrorHandling'
import { Link } from 'expo-router'
import { View } from 'react-native'

function bai12() {
  return (
    <View style={{ margin: 20 }}>
      <Link href={'/'} style={{ backgroundColor: 'pink', width: 100, borderColor: 'black', borderWidth: 1 }}>
        Trang chủ
      </Link>
      <ErrorHandling />
    </View>
  )
}

export default bai12