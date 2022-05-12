import React from "react";
import {
  Container,
  Top,
  Bow,
  Icons,
  Bars,
  Cart,
  Catalog,
  Category,
} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import SearchBar from "../../components/searchBar/index";

export default function Market() {
  return (
    <Container>
      <Top>
        <Icons>
          <Bars>
            <Icon name="bars" size={24} color={"rgba(255, 255, 255, 0.94)"} />
          </Bars>
          <Cart>
            <Icon name="shopping-cart" size={24} color={"rgba(255, 255, 255, 0.94)"} />
          </Cart>
        </Icons>
        <SearchBar />
        <Catalog>
          <Category/>
        </Catalog>
      </Top>
      <Bow />
    </Container>
  );
}
