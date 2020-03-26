import React, { Component } from 'react'
import { Text, View, ScrollView  } from 'react-native'
import { Card, Avatar, Image } from 'react-native-elements'
import styled from 'styled-components'
import map from 'lodash/fp/map'
import get from 'lodash/fp/get'
import concat from 'lodash/fp/concat'
import orderBy from 'lodash/fp/orderBy'
import flow from 'lodash/fp/flow'
import { getAllPosts } from '../../api/posts'
import { getAllNews } from '../../api/news'

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

class Home extends Component {
  state = {
    posts: [],
    news: []
  }

  componentDidMount() {
    this.loadActivities()
  }

  loadActivities() {
    getAllPosts().then(data => this.setState({ posts: data }))
    getAllNews().then(data => this.setState({ news: data }))
  }

  render() {
    const { posts, news } = this.state
    const activities = flow(
      concat(news),
      orderBy('date', 'desc')
    )(posts)

    return (
      <StyledHome>
        {map(activity => (
          <StyledCard key={activity._id} title={get('isMarketing', activity) ? get('title', activity) : undefined}>
            {!get('isMarketing', activity) && (
            <StyledHeader>
              <Avatar
                rounded
                source={{
                  uri: get('user.image', activity)
                }}
              />
              <StyledName>{get('user.name', activity)}</StyledName>
            </StyledHeader>
            )}
            <StyledContent>
              {map((image, i) => (
                <StyledImage key={i} source={{ uri: image }} />
              ), get('image', activity))}
              <StyledContentText>{get('content', activity)}</StyledContentText>
            </StyledContent>
          </StyledCard>
        ), activities)}
      </StyledHome>
    )
  }
}

export default Home