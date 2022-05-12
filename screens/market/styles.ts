import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;

  background-color: #7671bf;
`;

export const Top = styled.View`
  align-items: center;
`;
export const Bow = styled.View`
  background-color: #f5f5f5;

  width: 100%;
  height: 65%;

  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  position: absolute;
  bottom: 0;
`;
export const Icons = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-left: 5%;
  margin-right: 5%;
  margin-top: 4%;

  border 1px solid red;
  width: 85%;
`;
export const Cart = styled.Pressable``;
export const Bars = styled.Pressable``;
export const Catalog = styled.View``;
export const Category = styled.Pressable`
  background-color: #fb4c;
`;