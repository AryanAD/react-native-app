import { View, Text, StyleSheet } from "react-native";
import React from "react";

const InternalStyle = () => {
  return (
    <View>
      <Text style={styles.text}>Internal Style</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
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
  },
});

export default InternalStyle;
