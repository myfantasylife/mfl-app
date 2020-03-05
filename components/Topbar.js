import React from 'react'
import { View } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import styled from 'styled-components'
import { GREEN_MFL } from '../theme'

const StyledRightComponent = styled(View)`
  display: flex;
  flex-direction: row;
`

const StyledIcon = styled(Icon)`
  margin: 10px;
`

const RightComponent = () => (
  <StyledRightComponent>
    <StyledIcon name='bell' type='font-awesome' color='#fff' containerStyle={{ marginRight: 5, marginLeft: 5 }} />
    <StyledIcon name='user-circle' type='font-awesome' color='#fff' containerStyle={{ marginRight: 5, marginLeft: 5 }} />
  </StyledRightComponent>
)

const Topbar = () => 
  <Header
    leftComponent={{ icon: 'search', color: '#fff' }}
    centerComponent={{ text: 'WORLD', style: { color: '#fff', fontWeight: '800' } }}
    rightComponent={<RightComponent />}
    containerStyle={{
    backgroundColor: GREEN_MFL,
    justifyContent: 'space-around',
    }}
  />

export default Topbar