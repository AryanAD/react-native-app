import { View, Text } from "react-native";
import React from "react";

const InlineStyle = () => {
  return (
    <>
      <Text
        style={{
          fontSize: 20,
          color: "midnightblue",
          backgroundColor: "skyblue",
          padding: 10,
          margin: 10,
          borderRadius: 10,
          textTransform: "uppercase",
          textAlign: "center",
          letterSpacing: 4,
          fontWeight: "bold",
        }}
      >
        Inline Style
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "orangered",
            width: "23%",
            height: 200,
          }}
        />
        <View
          style={{
            backgroundColor: "limegreen",
            width: "23%",
            height: 200,
          }}
        />
        <View
          style={{
            backgroundColor: "cyan",
            width: "23%",
            height: 200,
          }}
        />
        <View
          style={{
            backgroundColor: "yellow",
            width: "23%",
            height: 200,
          }}
        />
      </View>
    </>
  );
};

export default InlineStyle;
