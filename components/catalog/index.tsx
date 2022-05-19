import React from "react";
import { Container, Category, Text } from "./styles";

export default function Catalog() {
  return (
    <Container>
      <Category width={"50px"}>
        <Text>All</Text>
      </Category>
      <Category width={"60px"}>
        <Text>Sweets</Text>
      </Category>
      <Category width={"54px"}>
        <Text>Cakes</Text>
      </Category>
      <Category width={"64px"}>
        <Text>Candey</Text>
      </Category>
    </Container>
  );
}
