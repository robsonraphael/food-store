import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;

  background-color: #7671bf;

  align-items: center;
`;

export const Top = styled.View`
  align-items: center;
`;
export const Bow = styled.View`
  background-color: #f2f2f2;

  width: 100%;
  height: 65%;

  border-top-left-radius: 42px;
  border-top-right-radius: 42px;

  position: absolute;
  bottom: 0;
`;
export const Icons = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 4%;
  padding: 5px;
  width: 350px;
`;
export const Cart = styled.Pressable``;
export const Bars = styled.Pressable``;

export const Food = styled.View`
  width: 90%;
  height: 450px;

  margin-top: 10px;
  z-index: 1;

  align-items: center;
  justify-content: space-around;
`;
export const Buttons = styled.View``;
export const Previus = styled.TouchableOpacity``
export const Next = styled.TouchableOpacity``