import { View, Text, Button } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      <Text>Inside the button component</Text>
      <Button title="Click Me" color={"midnightblue"} />
      <Button title="Second Button" color={"skyblue"} disabled></Button>

      {/* Events */}
      <Button
        title="console.log()"
        onPress={() => console.log("Button Pressed")}
      />
      <Button
        title="console.warn()"
        onPress={() => console.warn("Button Pressed")}
      />
      <Button title="alert()" onPress={() => alert("Button Pressed")} />
    </View>
  );
};

export default ButtonComponent;
