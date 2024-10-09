import { View, Text, Image, Button, StyleSheet } from "react-native";
import React from "react";

const CardComponent = () => {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <View style={style.containerStyle}>
        <Image
          source={require("../assets/image.jpg")}
          style={{ width: 200, height: 200, borderRadius: 100 }}
        />

        <Text style={{ fontWeight: "bold" }}>Aryan Adhikari</Text>

        <Text>My name is Aryan and I love coding.</Text>

        <Button title="Press Me" color={"skyblue"} disabled />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    width: "80%",
    backgroundColor: "whitesmoke",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    gap: 10,
  },
});

export default CardComponent;
