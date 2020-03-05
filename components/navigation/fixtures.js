import React from 'react'
import { Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  )
}

const TeamScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Team</Text>
    </View>
  )
}

const PublishScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Publish</Text>
    </View>
  )
}

const GuildScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Guild</Text>
    </View>
  )
}

const StoreScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Store</Text>
    </View>
  )
}

export const NAVIGATION_TABS = [
  {
    name: 'Accueil',
    component: HomeScreen,
    icon: 'home'
  },
  {
    name: 'Groupes',
    component: TeamScreen,
    icon: 'group'
  },
  {
    name: 'Publier',
    component: PublishScreen,
    icon: 'edit'
  },
  {
    name: 'Guildes',
    component: GuildScreen,
    icon: 'flag'
  },
  {
    name: 'Boutique',
    component: StoreScreen,
    icon: 'shopping-bag'
  }
]