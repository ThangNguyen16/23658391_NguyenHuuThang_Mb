import BookCard from '@/components/BookCard'
import BookGrid from '@/components/BookGrid'
import BottomTabBar from '@/components/BottomTabBar'
import CategoryChips from '@/components/CategoryChips'
import FloatingCartButton from '@/components/FloatingCartButton'
import Header from '@/components/Header'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

const index = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      
      {/* 1. Header cố định */}
      <Header />
      
      {/* 2. Vùng nội dung cuộn */}
      <ScrollView 
        style={styles.scrollContent} 
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }} // Chừa khoảng trống dưới cho nút nổi
        showsVerticalScrollIndicator={false}
      >
        <BookCard />
        <CategoryChips />
        <BookGrid />
      </ScrollView>

      {/* 3. Nút giỏ hàng nổi (Absolute) */}
      <FloatingCartButton />

      {/* 4. Tab bar cố định dưới cùng */}
      <BottomTabBar />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollContent: {
    flex: 1,
    gap: 15
  }
})

export default index