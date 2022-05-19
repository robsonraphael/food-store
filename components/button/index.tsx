import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Wrap, Text, Border } from "./styles";

type MyProps = {
  text: string;
};

export function Register({ text }: MyProps) {
  return (
    <LinearGradient
      colors={["#7671BF", "#6D63FF"]}
      locations={[0, 0.93]}
      style={Border}
      start={{ x: 0.5, y: 0.4 }}
      end={{ x: 1.0, y: 0.8 }}
    >
      <Wrap>
        <Text>{text}</Text>
      </Wrap>
    </LinearGradient>
  );
}
