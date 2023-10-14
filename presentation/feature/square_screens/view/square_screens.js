import React, { useState, useReducer } from "react";
import { View, Text, Button, FlatList } from "react-native";
import ColorCounter from "../../components/colorcounter";

// Các bước tạo useReducer
// 1. Xác định initState ( dữ liệu mặc định)
// 2. Action hành động
// 3. Tạo Reducer
// 4. Dispatch
const reducer = (state, action) => {
  switch (action) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
  }
};
const SquareScreens = (props) => {
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);
  const inistate = { red: 0, blue: 0, green: 0 };
  const [state, dispatch] = useReducer(reducer, inistate);
  console.log(...state);
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
      <ColorCounter />
    </View>
  );
};
export default SquareScreens;
