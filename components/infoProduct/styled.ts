import styled from 'styled-components/native';

type MyProps =  {
    display: any,
  }
  

export const Container = styled.Pressable`
    width: 90%;
    height: 70%;
    
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 1);

    position: absolute;
    top: 150px;
    z-index: 2;

    display: ${(props : MyProps) => props.display};
    align-items: center;
    transition: all ease 0.25s;
`
export const Wrap = styled.View`
  align-items: center;
  margin-top: 2%;
`
export const Text = styled.Text`
  font-size: 14px;
  color: #888888;
  margin-top: 1%;
`
export const TextReview = styled.Text`
  font-size: 11px;
`
export const Title = styled.Text`
  font-size: 20px;
  color: #101010;
  font-weight: bold;
`
export const Image = styled.Image`
  width: 320px;
  height: 200px;
`
export const Review = styled.View`
  width: 140px;
  height: 30px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  position: absolute;
  bottom: 38%;
  left: 9%;
`
export const Price = styled.View`
  width: 60px;
  height: 40px;
  
  background-color: #8fb4;
  border-radius: 5px;

  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0;
  bottom: 35%;
`
export const TextPrice = styled.Text`
  font-size: 24px;
  color: #88fb88;
`
export const About = styled.View`
  position: absolute;
  bottom: 22%;
`
export const TitleAbout = styled.Text`
  font-size: 17px;
  color: #101010;
  font-weight: bold;
`
export const TextAbout = styled.Text`
  font-size: 13px;
  color: #888888;
  padding-top: 5px;
  width: 300px;
`
export const WrapBottom = styled.View`
  flex-direction: row;
  align-items: center;

  width: 95%;
  height: 15%;

  position: absolute;
  bottom: 3%;
`

export const BoxShadow = {
  shadowColor: "#000",
  shadowOffset: { width: 5, height: 5 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 3,
};
export const Button = styled.View`
  align-items: center;
  justify-content: center;

  background-color: #FCB495;
  
  width: 40px;
  height: 40px;

  border-radius: 40px;
`
export const WrapBtn = styled.View`
  flex-direction: row;
  justify-content: space-between;

  height: 50px;
  width: 110px;

  position: absolute;
  right: 0;
`
export const Buy = styled.TouchableOpacity`
  width: 120px;
  height: 50px;

  background-color: #3F3D56;
  border-radius: 7px;
  
  align-items: center;
  justify-content: center;

  left: 50px;
`
export const TextBuy = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`