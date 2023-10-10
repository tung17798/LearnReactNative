import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import ColorCounter from "../../components/colorcounter";
const COLOR_INCREMENT = 15;
const SquareScreens = (props) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red);
  const setColor = (color, change) => {
    if (color === "red") {
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
      }
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
        onPress={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onPress={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        color="Green"
      />
    </View>
  );
};
export default SquareScreens;
