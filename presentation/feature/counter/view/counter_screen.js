import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import ColorScreen from "../../colors_screens/view/color_screens";
const CounterScreens = (props) => {
  const [counter, setCounter] = useState(0);
  const [colors, setColors] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.textCounter}>{colors.length}</Text>
      <View style={{ height: 100, width: 400, alignItems: "center" }}>
        <ColorScreen data={colors} />
      </View>
      <Text style={styles.textCounter}>{counter}</Text>
      <TouchableOpacity
        style={styles.buttonPlusContainer}
        onPress={() => {
          setCounter(counter + 1);
        }}
      >
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonPlusContainer}
        onPress={() => {
          setCounter(counter - 1);
        }}
      >
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonPlusContainer}
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
      >
        <Text style={styles.textButton}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};
const randomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${blue}, ${green})`;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textCounter: {
    fontSize: 40,
    fontStyle: "italic",
  },
  buttonPlusContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    width: 200,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
  textButton: {
    fontSize: 28,
    textAlign: "center",
  },
});
export default CounterScreens;
