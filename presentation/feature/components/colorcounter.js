import React from "react";
import { View, Text, Button, FlatList } from "react-native";
const ColorCounter = ({ color, onPress, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onPress()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};
export default ColorCounter;
