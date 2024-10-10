import { View, Text } from "react-native";
import React from "react";

interface ChildProps {
  name: string;
  age: number;
}
const ChildComponent = ({ name, age }: ChildProps) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
};

export default ChildComponent;
