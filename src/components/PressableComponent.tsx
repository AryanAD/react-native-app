import { View, Text, Pressable } from "react-native";
import React from "react";

const PressableComponent = () => {
  return (
    <View>
      {/* 
            1. onPress -> Called when the component is pressed. Required
            2. onPressIn -> Called when the press gesture starts
            3. onPressOut -> Called when the press gesture ends/cancelled
            4. onLongPress -> Called when a long press is detected
        */}

      <Pressable onPress={() => console.log("On Press")}>
        <Text style={{ color: "orangered" }}>On Press</Text>
      </Pressable>
      <Pressable onPressIn={() => console.log("On Press In")}>
        <Text style={{ color: "yellowgreen" }}>On Press In</Text>
      </Pressable>
      <Pressable onPressOut={() => console.log("On Press Out")}>
        <Text style={{ color: "cyan" }}>On Press Out</Text>
      </Pressable>
      <Pressable onLongPress={() => console.log("On Long Press")}>
        <Text style={{ color: "burlywood" }}>On Long Press</Text>
      </Pressable>
    </View>
  );
};

export default PressableComponent;
