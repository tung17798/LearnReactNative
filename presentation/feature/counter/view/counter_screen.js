import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

const CounterScreens = () => {
  counter = 0;
  return (
    <View style={styles.container}>
      <Text style={styles.textCounter}>{counter}</Text>
      <View>
        <TouchableOpacity
          style={styles.buttonPlusContainer}
          onPress={() => {
            counter++;
          }}
        >
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPlusContainer}
          onPress={() => {
            counter--;
          }}
        >
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
