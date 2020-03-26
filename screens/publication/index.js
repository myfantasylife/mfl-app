import React, { useState } from 'react'
import { Text, View, TextInput, Button, Alert } from 'react-native'
import { Icon } from 'react-native-elements'
import styled from 'styled-components'

const StyledWrapper = styled(View)`
  padding: 10px;
  align-items: flex-start;
`

const StyledSection = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`

const StyledTextInput = styled(TextInput)`
  border: 1px solid #D8D8D8;
  padding: 20px;
  width: 100%;
  height: 200px;
`

const Publish = ({ navigation }) => {
  const [ value, changeValue ] = useState(undefined)
  return (
    <StyledWrapper>
      <StyledSection>
        <Icon 
          name='user-circle' 
          type='font-awesome' 
          color='#000' 
          size={35}
          containerStyle={{ marginRight: 5, marginLeft: 5 }} 
        />
        <Text>Mon pseudo</Text>
      </StyledSection>
      <StyledTextInput 
        placeholder="Ecrire ici..."
        multiline={true}
        onChangeText={text => changeValue(text)}
        value={value}
      />
      <StyledSection>
        <Button
          title="Annuler"
          onPress={() => navigation.navigate('Accueil')}
        />
        <Button
          title="Publier"
          onPress={() => Alert.alert('Simple Button pressed')}
          disabled={!value}
        />
      </StyledSection>
    </StyledWrapper>
  )
}

export default Publish