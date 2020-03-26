import React from 'react'
import { Text, View } from 'react-native'
import Home from '../../screens/home'
import Publish from '../../screens/publication'

const TeamScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Team</Text>
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
    component: Home,
    icon: 'home'
  },
  {
    name: 'Groupes',
    component: TeamScreen,
    icon: 'group'
  },
  {
    name: 'Publier',
    component: Publish,
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