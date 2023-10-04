import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import styles from "../../sign_in/view/styles";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeview}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("SignIn")}
        title="Learn More"
      />
    
    </View>
  );
}
export default HomeScreen;

