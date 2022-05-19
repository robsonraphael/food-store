import React, {useState} from "react";
import {
  Container,
  Wrap,
  Image,
  Title,
  Text,
  Price,
  BoxShadow,
} from "./styles";
import Icon from "react-native-vector-icons/AntDesign";

interface MyProps {
  title: string;
  text: string;
  price: string;

  Png: any;
  large: string;
  base: string;

  MarginTop: string;
  MarginRight: string;
  onClick: any;
}

export default function Product({
  title,
  text,
  price,
  Png,
  large,
  base,
  MarginTop,
  MarginRight,
  onClick,
}: MyProps) {
  const [changeIcon, setChangeIcon] = useState('hearto')

  return (
    <Container style={BoxShadow} onPress={onClick}>
      <Wrap>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Price>{price}</Price>
      </Wrap>
      <Image
        source={Png}
        width={large}
        height={base}
        right={MarginRight}
        top={MarginTop}
      />
      <Icon onPress={() => {
        if(changeIcon == 'heart'){
          setChangeIcon('hearto')
        }else{
          setChangeIcon('heart')
        }
      }}
        name={changeIcon}
        size={22}
        color={"#FCB495"}
        style={{
          position: "absolute",
          right: 10,
          top: 7,
          padding: 2,
        }}
      />
    </Container>
  );
}
