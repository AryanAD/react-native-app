import { View, Text, Button, Image } from "react-native";
import React from "react";

const CardComponent = () => {
  return (
    <View>
      <Image source={require("../assets/image.png")} />
      <Text>Aryan Adhikari</Text>
      <Text>My name is Aryan and I love coding</Text>
      <Button title="Press Me" />
    </View>
  );
};

export default CardComponent;
