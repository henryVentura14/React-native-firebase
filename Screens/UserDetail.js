import React, { useEffect, useState } from 'react'
import {
  View,
  Alert,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import firebase from '../Database/firebase'

const UserDetail = props => {
  const initialState = {
    id: '',
    name: '',
    email: '',
    phone: ''
  }
  const [user, setUser] = useState(initialState)
  const { name, email, phone } = user
  const [loading, setLoading] = useState(true)

  const handleForm = (name, value) => {
    setUser({ ...user, [name]: value })
  }
  const getUserById = async id => {
    const dbFetch = firebase.db.collection('users').doc(id)
    const doc = await dbFetch.get()
    const user = doc.data()
    setUser({ ...user, id: doc.id })
    setLoading(false)
  }

  const updateUser = async () => {
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
      console.log('Please provide a name')
    }else{
      try {
        const dbFetch = firebase.db.collection('users').doc(user.id);
        await dbFetch.set({
          name,
          email,
          phone
        })
        setUser(initialState)
        props.navigation.navigate('UserList')
      } catch (error) {
        console.log(error)
      }
    }
  }
  const deleteUser = async id => {
    const dbFetch = firebase.db
      .collection('users')
      .doc(props.route.params.userId)
    await dbFetch.delete()
    props.navigation.navigate('UserList')
  }
  const openConfirm = () => {
    Alert.alert('Remove th user', 'Are you sure?', [
      { text: 'Yes', onPress: () => deleteUser() },
      { text: 'No', onPress: () => console.log(false) }
    ])
  }
  useEffect(() => {
    getUserById(props.route.params.userId)
  }, [])
  if (loading) {
    return (
      <View>
        <ActivityIndicator size='large' color='#457b9d' />
      </View>
    )
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          defaultValue={user.name}
          placeholder='Name user'
          onChangeText={value => handleForm('name', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          defaultValue={user.email}
          placeholder='Email user'
          onChangeText={value => handleForm('email', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          defaultValue={user.phone}
          placeholder='Phone user'
          onChangeText={value => handleForm('phone', value)}
        />
      </View>
      <View>
        <Button
          color='#2a9d8f'
          title='Update user'
          onPress={() => updateUser()}
        />
      </View>
      <View>
        <Button
          color='#e63946'
          title='Delete user'
          onPress={() => openConfirm()}
        />
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
export default UserDetail
