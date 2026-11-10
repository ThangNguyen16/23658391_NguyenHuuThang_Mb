import { Link } from 'expo-router'
import { ScrollView, StyleSheet, Text } from 'react-native'

function index() {
  return (
    <ScrollView style={{ margin: 20 }}>
      <Text>Nhấn để chuyển đến bài:</Text>
      <Link href={'/bai9'} style={styles.link}>Bài 9</Link>
      <Link href={'/bai10'} style={styles.link}>Bài 10</Link>
      <Link href={'/bai11'} style={styles.link}>Bài 11</Link>
      <Link href={'/bai12'} style={styles.link}>Bài 12</Link>
      <Link href={'/bai13'} style={styles.link}>Bài 13</Link>
      <Link href={'/bai14'} style={styles.link}>Bài 14</Link>
      <Link href={'/bai15'} style={styles.link}>Bài 15</Link>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  link: {
    backgroundColor: 'pink',
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 8,
  },
})

export default index