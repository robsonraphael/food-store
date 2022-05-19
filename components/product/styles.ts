import styled from "styled-components/native";

interface ImageProps {
  source: any;
}

type MyProps = {
  width: any;
  height: any;

  right: any;
  top: any;
};

export const Container = styled.TouchableOpacity`
  flex-direction: row;

  background-color: #ffff;
  border-radius: 7px;

  padding: 10px;

  width: 300px;
  height: 125px;

  
`;
export const Wrap = styled.View``;
export const Image = styled.Image.attrs<ImageProps>((props) => ({
  source: props.source,
}))`
  position: absolute;
  right: ${(props: MyProps) => props.right};
  top: ${(props: MyProps) => props.top};

  width: ${(props: MyProps) => props.width};
  height: ${(props: MyProps) => props.height};
`;
export const Title = styled.Text`
  font-size: 19px;
`;
export const Text = styled.Text`
  font-size: 13px;

  width: 133px;
  margin-top: 6px;
`;
export const Price = styled.Text`
  font-size: 20px;
  color: #5aa72b;

  position: absolute;
  bottom: 4px;
`;
export const BoxShadow = {
  shadowColor: "rgba(0, 0, 0, 0.2)",
  shadowOffset: { width: 1, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 1,
  elevation: 2,
};
