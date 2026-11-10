import { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

type Post = {
  userId: number
  id: number
  title: string
  completed: boolean
}

function RefreshList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [refreshing, setRefreshing] = useState(false)

  const loadData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await resp.json()
    setPosts(data as Post[])
  }

  useEffect(() => {
    loadData()
  }, [])

  const onRefresh = async () => {
    setRefreshing(true)
    await loadData()
    setRefreshing(false)
  }

  return (
    <View style={{ marginTop: 10 }}>
      <Text>Bài 15: Kéo xuống để tải lại</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={({ item }) => (
          <Text style={{ backgroundColor: 'pink', margin: 5, padding: 5 }}>
            {item.title}
          </Text>
        )}
      />
    </View>
  )
}

export default RefreshList