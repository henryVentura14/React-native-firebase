import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserCreate from './Screens/UserCreate'
import UserList from './Screens/UserList'
import UserDetail from './Screens/UserDetail'

const Stack = createStackNavigator()

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='UserList'
        component={UserList}
        options={{ title: 'Users list' }}
      />
      <Stack.Screen
        name='UserCreate'
        component={UserCreate}
        options={{ title: 'Create a new user' }}
      />
      <Stack.Screen
        name='UserDetail'
        component={UserDetail}
        options={{ title: 'User detail' }}
      />
    </Stack.Navigator>
  )
}
export default function App () {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
