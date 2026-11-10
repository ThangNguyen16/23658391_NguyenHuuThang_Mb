import { useEffect, useState } from 'react'
import { Button, FlatList, Text, TextInput, View } from 'react-native'

type User = {
  id: number
  name: string
  email: string
}

function filterByName<T extends { name: string }>(items: T[], keyword: string): T[] {
  return items.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  )
}

function FilteredList() {
  const [users, setUsers] = useState<User[]>([])
  const [keyword, setKeyword] = useState('')
  const [result, setResult] = useState<User[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data as User[])
        setResult(data as User[])
      })
  }, [])

  const handleFilter = () => {
    setResult(filterByName(users, keyword))
  }

  return (
    <View style={{ marginTop: 10 }}>
      <Text>Bài 13: Lọc danh sách theo tên</Text>
      <TextInput
        placeholder="Nhập tên cần lọc"
        value={keyword}
        onChangeText={setKeyword}
        style={{ borderWidth: 1, borderColor: 'black', marginVertical: 5 }}
      />
      <Button title="Lọc" onPress={handleFilter} />
      <FlatList
        data={result}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ backgroundColor: 'pink', margin: 5, padding: 5 }}>
            {item.name} - {item.email}
          </Text>
        )}
      />
    </View>
  )
}

export default FilteredList