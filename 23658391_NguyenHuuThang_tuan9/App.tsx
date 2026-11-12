import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CounterScreen from './screen/CounterScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ShoppingCart from './screen/ShoppingCart';

const Stack= createNativeStackNavigator()

export default function App() {
  return (

    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Counter"} component={CounterScreen}></Stack.Screen>
        <Stack.Screen name={"ShoppingCart"} component={ShoppingCart}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
