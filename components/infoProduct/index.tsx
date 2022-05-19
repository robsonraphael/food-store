import React from "react";
import {
  BoxShadow,
  Container,
  Text,
  Image,
  Title,
  Review,
  TextReview,
  Price,
  Wrap,
  About,
  TitleAbout,
  TextAbout,
  WrapBottom,
  Button,
  WrapBtn,
  Buy,
  TextBuy,
  TextPrice,
} from "./styled";
import Icon from "react-native-vector-icons/FontAwesome";

export default function InfoProduct({ onPress, active }: any) {
  return (
    <Container display={active} onPress={onPress} style={BoxShadow}>
      <Image source={require("../../assets/donutFull.png")} />
      <Wrap>
        <Title>Donuts</Title>
        <Text>Flavoured cupcakes with special icing</Text>
      </Wrap>
      <Review>
        <Icon name="star" size={18} color={"#FCFF74"} />
        <Icon name="star" size={18} color={"#FCFF74"} />
        <Icon name="star" size={18} color={"#FCFF74"} />
        <Icon name="star-half-o" size={18} color={"#FCFF74"} />
        <Icon name="star" size={18} color={"#888888"} />
        <TextReview style={{ paddingLeft: 3 }}>2.5k</TextReview>
      </Review>
      <Price>
        <TextPrice>$5</TextPrice>
      </Price>
      <About>
        <TitleAbout>About this product</TitleAbout>
        <TextAbout>
          Flavoured cupcakes with special icing, Flavoured cupcakes.
        </TextAbout>
      </About>
      <WrapBottom>
        <Icon name="heart-o" size={30} color={"#FCB495"} style={{position: 'relative', left: 10}}/>
        <Buy>
            <TextBuy>Buy Now</TextBuy>
        </Buy>
        <WrapBtn>
            <Button>
            <Icon name="minus" size={28} color={"#fff"} />
            </Button>
            <Button>
            <Icon name="plus" size={30} color={"#fff"} />
            </Button>
        </WrapBtn>
      </WrapBottom>
    </Container>
  );
}
