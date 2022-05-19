import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Container,
  Wrapper,
  Circle,
  Text,
  Title,
  WrapperText,
  WrapperButtons,
  Login,
  TextBtn,
} from "./styles";
import SvgFile from "../../assets/donout.svg";
import { Register } from "../../components/button/index";

export default function Introduction({ navigation }: any) {
  return (
    <Container>
      <StatusBar style="dark" />
      <Wrapper>
        <SvgFile width={250} height={250} />
        <Circle />
      </Wrapper>
      <WrapperText>
        <Title>Sweet Ordering App</Title>
        <Text>Order you Favorite desert here !</Text>
      </WrapperText>
      <WrapperButtons>
        <Login
          onPress={() => {
            navigation.navigate("Market");
          }}
        >
          <TextBtn>Login</TextBtn>
        </Login>
        <Register text="Get Started"/>
      </WrapperButtons>
    </Container>
  );
}
