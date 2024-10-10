import { View, Text, FlatList } from "react-native";
import React from "react";

const ListData = () => {
  const names = ["Aryan", "John", "Paul", "Ringo", "George"];

  return (
    <View>
      <FlatList
        data={names}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default ListData;
