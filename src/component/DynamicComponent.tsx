import { View, Text } from "react-native";
import React from "react";

const DynamicComponent = () => {
  const name = "Aryan Adhikari";
  const multiply = (a: number, b: number) => {
    return a * b;
  };

  return (
    <View>
      <Text>My name is {name}</Text>
      <Text>2 * 2 = {multiply(2, 2)}</Text>
      <Text> 2 + 2 = {2 + 2}</Text>
    </View>
  );
};

export default DynamicComponent;
