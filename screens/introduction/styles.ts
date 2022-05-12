import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #3f3d56;

  width: 100%;
  height: 100%;

  align-items: center;
`;
export const Wrapper = styled.View`
  margin-top: 12%;

  width: 80%;
  height: 44%;

  align-items: center;
  justify-content: center;
`;
export const WrapperText = styled.View`
  width: 90%;
  height: 20%;

  align-items: center;
`;
export const Title = styled.Text`
  font-weight: bold;
  color: #ffff;
  font-size: 28px;
  text-align: center;

  margin-top: 5px;
  width: 90%;
`;
export const Text = styled.Text`
  font-weight: 300;
  color: #ffff;
  font-size: 14px;
  text-align: center;

  width: 165px;
  margin-top: 15px;
`;

export const Circle = styled.View`
  width: 200px;
  height: 200px;

  border-radius: 250px;
  border: none;

  background-color: #5e5373;
  opacity: 0.93;

  position: absolute;
  z-index: -1;
`;
export const WrapperButtons = styled.View`
  width: 80%;
  height: 25%;

  align-items: center;
`;


export const Login = styled.Pressable`
  width: 20%;
  height: 15%;

  margin-bottom: 25px;
`
export const TextBtn = styled.Text`
  font-size: 18px;
  font-weight: 300;
  text-align: center;

  color: #ffff;
`