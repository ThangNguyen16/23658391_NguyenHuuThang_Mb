import { useEffect, useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'

type Product = {
  id: number
  title: string
}

type ApiResponse<T> = {
  data: T[]
  total: number
  page: number
}

async function fetchProducts(page: number): Promise<ApiResponse<Product>> {
  const limit = 5
  const skip = (page - 1) * limit
  const resp = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  )
  const json = await resp.json()
  return {
    data: json.products as Product[],
    total: json.total,
    page: page,
  }
}

function PaginationList() {
  const [response, setResponse] = useState<ApiResponse<Product> | null>(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchProducts(page).then((res) => setResponse(res))
  }, [page])

  const totalPages = response ? Math.ceil(response.total / 5) : 1

  return (
    <View style={{ marginTop: 10 }}>
      <Text>
        Bài 14: Phân trang — Trang {page}/{totalPages}
      </Text>
      <FlatList
        data={response?.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ backgroundColor: 'pink', margin: 5, padding: 5 }}>
            {item.title}
          </Text>
        )}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Button title="Trước" onPress={() => setPage(page > 1 ? page - 1 : 1)} />
        <Button
          title="Sau"
          onPress={() => setPage(page < totalPages ? page + 1 : page)}
        />
      </View>
    </View>
  )
}

export default PaginationList