import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  shadowStyle: {
    padding: 40,
    width: "100%",
    borderRadius: 10,
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    textAlign: "center",
    elevation: 6,
  },
  textStyle: {
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

export default style;
