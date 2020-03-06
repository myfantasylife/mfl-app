import React from 'react'
import { Text, View, ScrollView  } from 'react-native'
import { Card, Avatar, Image } from 'react-native-elements'
import styled from 'styled-components'
import map from 'lodash/fp/map'
import get from 'lodash/fp/get'
import { ACTIVITIES } from './fixtures'

const StyledHome = styled(ScrollView )``

const StyledCard = styled(Card)`
  width: 50%;
`

const StyledHeader = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledName = styled(Text)`
  font-weight: bold;
  margin: 0 10px;
`

const StyledContent = styled(View)`
  margin: 5px 0;
`

const StyledContentText = styled(Text)`
  margin: 10px;
`

const StyledImage = styled(Image)`
  height: 150px;
`

const Home = () => {
  return (
    <StyledHome>
      {map(activity => (
        <StyledCard title={activity.isMarketing ? activity.title : undefined}>
          {!activity.isMarketing && (
          <StyledHeader>
            <Avatar
              rounded
              source={{
                uri: get('user.avatar', activity)
              }}
            />
            <StyledName>{get('user.name', activity)}</StyledName>
          </StyledHeader>
          )}
          <StyledContent>
            {map(image => (
              <StyledImage source={{ uri: image.url }} />
            ), activity.image)}
            <StyledContentText>{get('content', activity)}</StyledContentText>
          </StyledContent>
        </StyledCard>
      ), ACTIVITIES)}
    </StyledHome>
  )
}

export default Home