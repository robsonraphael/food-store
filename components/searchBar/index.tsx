import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Container, Search } from "./styles";

export default function SearchBar() {
  return (
    <Container>
      <LinearGradient
        colors={["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.3)"]}
        style={{ borderRadius: 7 , height: 35, justifyContent: 'space-between', flexDirection: 'row', paddingRight: 9, alignItems: 'center'}}
      >
        <Search placeholder="search..." placeholderTextColor={"rgba(255, 255, 255, 0.7)"}/>
        <Icon name="search" color="rgba(255, 255, 255, 0.9)" size={14}/>
      </LinearGradient>
    </Container>
  );
}
