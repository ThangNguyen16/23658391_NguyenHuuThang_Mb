import FilteredList from '@/components/FilteredList'
import { Link } from 'expo-router'
import { View } from 'react-native'

function bai13() {
  return (
    <View style={{ margin: 20 }}>
      <Link href={'/'} style={{ backgroundColor: 'pink', width: 100, borderColor: 'black', borderWidth: 1 }}>
        Trang chủ
      </Link>
      <FilteredList />
    </View>
  )
}

export default bai13