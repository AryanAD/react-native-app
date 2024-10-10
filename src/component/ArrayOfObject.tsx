import { View, Text, FlatList } from "react-native";
import React from "react";

const ArrayOfObject = () => {
  const names = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Alice", age: 28 },
    { id: 4, name: "Bob", age: 32 },
    { id: 5, name: "Charlie", age: 27 },
    { id: 6, name: "David", age: 31 },
    { id: 7, name: "Eve", age: 29 },
    { id: 8, name: "Frank", age: 33 },
    { id: 9, name: "Grace", age: 30 },
    { id: 10, name: "Hannah", age: 26 },
    { id: 11, name: "Ivy", age: 45 },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={names}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ArrayOfObject;
