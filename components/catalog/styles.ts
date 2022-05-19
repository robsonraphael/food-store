import styled from "styled-components/native";

interface MyProps {
  width: string;
}

export const Container = styled.View`
  width: 300px;
  height: 32px;

  margin-top: 7%;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Category = styled.TouchableOpacity`
  padding: 5px;
  width: ${(props: MyProps) => props.width};
`;

export const Text = styled.Text`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
`;
