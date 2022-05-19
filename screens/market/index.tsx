import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

/* Styled Components */
import {
  Container,
  Top,
  Bow,
  Icons,
  Bars,
  Cart,
  Food,
  Buttons,
  Previus,
  Next,
} from "./styles";

/* Components */
import Icon from "react-native-vector-icons/FontAwesome5";
import SearchBar from "../../components/searchBar/index";
import Catalog from "../../components/catalog/index";
import Product from "../../components/product/index";
import InfoProduct from "../../components/infoProduct/index";

/* Images */
const PngFile = {
  cupCake: require("../../assets/cup_cake.png"),
  donout: require("../../assets/donut.png"),
  macaron: require("../../assets/macaron.png"),
};

export default function Market() {
  const [isActive, setIsActive] = useState("none");
  return (
    <Container>
      <StatusBar style="dark" />
      <Top>
        <Icons>
          <Bars>
            <Icon name="bars" size={24} color={"rgba(255, 255, 255, 0.94)"} />
          </Bars>
          <Cart>
            <Icon
              name="shopping-cart"
              size={24}
              color={"rgba(255, 255, 255, 0.94)"}
            />
          </Cart>
        </Icons>
        <SearchBar />
        <Catalog />
      </Top>
      <Food>
        <Product
          onClick={() => setIsActive("flex")}
          title={"Cup Cake"}
          text={"Flavoured cupcakes with special icing"}
          price={"$5"}
          Png={PngFile.cupCake}
          large={"100px"}
          base={"100px"}
          MarginRight={"28px"}
          MarginTop={"11px"}
        />
        <Product
          onClick={() => setIsActive("flex")}
          title={"Donout"}
          text={"Flavoured cupcakes with special icing"}
          price={"$5"}
          Png={PngFile.donout}
          large={"110px"}
          base={"70px"}
          MarginRight={"30px"}
          MarginTop={"25px"}
        />
        <Product
          onClick={() => setIsActive("flex")}
          title={"Macaron"}
          text={"Flavoured cupcakes with special icing"}
          price={"$5"}
          Png={PngFile.macaron}
          large={"120px"}
          base={"110px"}
          MarginRight={"20px"}
          MarginTop={"5px"}
        />
      </Food>
      <InfoProduct active={isActive} onPress={() => setIsActive("none")}/>
      <Bow />
      <Buttons>
        <Previus />
        <Next />
      </Buttons>
    </Container>
  );
}
