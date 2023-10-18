import React from "react";
import { View, Text, Button, FlatList, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { IMAGENAME } from "../image/index";

const WelcomeScreen = () => {
  return (
    <LinearGradient
      colors={["#FF5A00", "#F87B1E", "#F4A930"]}
      style={styles.linearGradient}
      start={{ x: 0.0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView>
        <View style={styles.container1}>
          <Image source={IMAGENAME} style={styles.sizeImageLogo} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default WelcomeScreen;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: 813,
  },
  sizeImageLogo: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  container1: { alignItems: "center" },
});
