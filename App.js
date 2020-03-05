import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import Topbar from './components/Topbar'
import Navigation from './components/navigation'

const StyledAppView = styled(View)`
  height: 100%;
`

export default function App() {
  return (
    <StyledAppView>
      <Topbar />
      <Navigation />
    </StyledAppView>
  )
}