import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import { NAVIGATION_TABS } from './fixtures'
import { GREEN_MFL } from '../../theme'
import map from 'lodash/fp/map'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: GREEN_MFL
      }}>
        {map((tab, i) => (
          <Tab.Screen 
            key={i}
            name={tab.name} 
            component={tab.component} 
            options={{
              tabBarIcon: () => (
                <Icon name={tab.icon} type='font-awesome' />
              )
            }} 
          />
        ), NAVIGATION_TABS)}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation