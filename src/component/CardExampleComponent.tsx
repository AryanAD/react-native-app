import { View, Text, Image, Button } from "react-native";
import React from "react";

const CardExampleComponent = () => {
  const price = 200000;
  const imageWidth = 300;
  const imageHeight = 300;
  const carName = "Lambo";
  const carRating = 4.5;
  const carDescription =
    "This is my car's description i know this is a beautiful car";

  return (
    <View>
      <Image
        source={require("../assets/image.jpg")}
        style={{ width: imageWidth, height: imageHeight }}
      />

      <Text>{carName}</Text>
      <Text>{carRating}</Text>
      <Text>{carDescription}</Text>
      <Text>{price}</Text>

      <Button title="Add To Cart" />
    </View>
  );
};

export default CardExampleComponent;
