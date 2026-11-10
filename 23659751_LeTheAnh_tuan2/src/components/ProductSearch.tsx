import { useState } from 'react'
import { Button, FlatList, Text, TextInput, View } from 'react-native'

type Product = {
  id: number
  title: string
  price: number
}

type ProductResponse = {
  products: Product[]
  total: number
  skip: number
  limit: number
}

function ProductSearch() {
  const [keyword, setKeyword] = useState('')
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = async (keyword: string, limit: number) => {
    try {
      const resp = await fetch(
        `https://dummyjson.com/products/search?q=${keyword}&limit=${limit}`
      )
      if (!resp.ok) {
        throw new Error('Lỗi fetch')
      }
      const data = await resp.json()
      setProducts((data as ProductResponse).products)
    } catch (error) {
      alert('Lỗi gọi API')
    }
  }

  return (
    <View style={{ marginTop: 10 }}>
      <Text>Bài 11: Tìm kiếm sản phẩm</Text>
      <TextInput
        placeholder="Nhập từ khóa"
        value={keyword}
        onChangeText={setKeyword}
        style={{ borderWidth: 1, borderColor: 'black', marginVertical: 5 }}
      />
      <Button title="Tìm kiếm" onPress={() => fetchProducts(keyword, 5)} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ backgroundColor: 'pink', margin: 5, padding: 5 }}>
            {item.title} - {item.price}$
          </Text>
        )}
      />
    </View>
  )
}

export default ProductSearch