import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Wrap, Text} from "./styles";

type MyProps = {
  text: string,
  to: any;
}

export function Register({text}: MyProps) {
  return (
    <LinearGradient
      colors={["#7671BF", "#6D63FF"]}
      locations={[0, 0.93]}
      style={{ borderRadius: 50 }}
      start={{x: 0.5, y: 0.4}}
      end={{x: 1.0, y: 0.80}}
    >
      <Wrap>
        <Text>{text}</Text>
      </Wrap>
    </LinearGradient>
  );
}
