import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = (props) => {
  return (
    <View>
      <FlatList
        horizontal
        keyExtractor={(item) => item}
        data={props.data}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

export default ColorScreen;
