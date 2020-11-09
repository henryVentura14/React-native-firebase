import React, { useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../Database/firebase'

const UserCreate = props => {
  const [form, setform] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const handleForm = (name, value) => {
    setform({ ...form, [name]: value })
  }
  const { name, email, phone } = form
  const AddNewUser = async () => {
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
      console.log('Please provide a name')
    } else {
      try {
        await firebase.db.collection('users').add({
          name,
          email,
          phone
        })
        props.navigation.navigate('UserList')
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Name user'
          onChangeText={value => handleForm('name', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Email user'
          onChangeText={value => handleForm('email', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Phone user'
          onChangeText={value => handleForm('phone', value)}
        />
      </View>
      <View>
        <Button title='Save user' onPress={() => AddNewUser()} />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  }
})
export default UserCreate
