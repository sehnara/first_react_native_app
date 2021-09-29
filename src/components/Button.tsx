import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native';
const Container = styled.TouchableOpacity``;
const Content = styled.Text`
    font-size : 42px;    
    margin : 0 100px;
`;
type Props = {
    name : string;
    onCount : (num : number)=>void;
}

function Button({name, onCount}:Props) {
    const handlePress = ()=>{
        if(name === "plus"){onCount(1);}
        else{onCount(-1);}
    }

    return (
        <Container onPress ={handlePress}>
            <Content>
            {
                name == "plus" 
                ? "+"
                : "-"
            }
            </Content>
        </Container>
    )
}

export default Button
