import React, { useState, useReducer } from "react";
import { View, Text, Button, FlatList } from "react-native";
import ColorCounter from "../../components/colorcounter";

// Các bước tạo useReducer
// 1. Xác định initState ( dữ liệu mặc định)
// 2. Action hành động
// 3. Tạo Reducer
// 4. Dispatch
const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  switch (action.colortoChange) {
    // ...state copy object sau đó thay đổi vì k được thay đổi state ban đầu

    case "red":
      return { ...state, red: state.red + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
  }
};

// const actionColor = (payload, type) => {
//   return {
//     type: type,
//     payload,
//   };
// };

const SquareScreens = (props) => {
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);
  const inistate = { red: 0, blue: 0, green: 0 };
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <ColorCounter
        onPress={() =>
          dispatch({ colortoChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colortoChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
    </View>
  );
};
export default SquareScreens;
