import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import styles from "../../sign_in/view/styles";
import ImageDetail from "../../components/image_detail";
function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeview}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("SignIn")}
        title="Learn More"
      />
      <Button onPress={() => navigation.navigate("Counters")} title="Counter" />
      <Button
        onPress={() => navigation.navigate("SquareScreens")}
        title="Square"
      />
      <Button
        onPress={() => navigation.navigate("WelcomeScreen")}
        title="Welcome"
      />
    </View>
  );
}
export default HomeScreen;
