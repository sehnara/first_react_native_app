import React, { useState } from 'react';
import {StyleSheet, Text} from 'react-native';
import styled from 'styled-components/native';
import Button from './components/Button';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.View`
  flex : 1;
`;

const HeaderContent = styled.Text`
  font-size : 24px;
  font-weight : bold;
  margin-top : 10px;
`;

const BodyContainer = styled.View`
  flex : 10;
  justify-content : center;  
`;

const BodyContent = styled.Text`
  margin-top : -10px;
  font-size : 50px;  
`;

const BottomContainer = styled.View`
  flex: 2;
  display : flex;
  flex-direction : row;
  
`;

const App = () => {
  const [count, setCount] =  useState<number>(0);
  const onPress = (num : number):void=>{
    setCount(count + num)
  }
  return (
    <Container>
      <HeaderContainer>     
        <HeaderContent>COUNTER</HeaderContent>   
      </HeaderContainer>

      <BodyContainer>
        <BodyContent>{count}</BodyContent>
      </BodyContainer>
      
      <BottomContainer>
        <Button name = "minus" onCount={onPress}/>
        <Button name = "plus" onCount={onPress}/>        
      </BottomContainer>
    </Container>
  );
};


export default App;
