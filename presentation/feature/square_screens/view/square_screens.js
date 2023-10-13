import React, { useState, useReducer } from "react";
import { View, Text, Button, FlatList } from "react-native";
import ColorCounter from "../../components/colorcounter";



// Các bước tạo useReducer
// 1. Xác định initState ( dữ liệu mặc định)
// 2. Action hành động
// 3. Tạo Reducer
// 4. Dispatch

const SquareScreens = (props) => {
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);
  console.log(red);
  const inistate = {red: 0, blue: 0 ,green: 0};

  const reducer = (color, action) = {
    
  }
  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
    }
  };
  return (
    <View>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <ColorCounter
        onPress={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onPress={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="blue"
      />
      <ColorCounter
        onPress={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="green"
      />
    </View>
  );
};
export default SquareScreens;
