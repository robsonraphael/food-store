import styled from "styled-components/native";

export const Search = styled.TextInput`
  padding-left: 20px;

  color: rgba(255, 255, 255, 0.6);
  font-size: 14.5px;

  width: 90%;
  height: 100%;
`;
export const Container = styled.View`
  width: 70%;
  margin-top: 8%;
`;
export const BoxShadow = {
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 2,
}