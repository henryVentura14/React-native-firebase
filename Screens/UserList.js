import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Button, Alert } from 'react-native'
import firebase from '../Database/firebase'
import { ListItem, Avatar } from 'react-native-elements'

const UserList = props => {
  const [users, setusers] = useState([])

  useEffect(() => {
    firebase.db.collection('users').onSnapshot(querySnapshot => {
      const users = []
      querySnapshot.docs.forEach(doc => {
        const { name, email, phone } = doc.data()
        users.push({
          id: doc.id,
          name,
          email,
          phone
        })
      })
      setusers(users)
    })
  }, [])
  return (
    <ScrollView>
      <Button
        color='#457b9d'
        onPress={() => props.navigation.navigate('UserCreate')}
        title='Create user'
      />
      {users.map(user => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate('UserDetail', {
                userId: user.id
              })
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )
      })}
    </ScrollView>
  )
}

export default UserList
