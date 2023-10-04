import React from "react";
import { Button, View, Text } from "react-native";

import styles from "./styles";
function SignInScreen({ route, navigation }) {
  const   itemId  = route.params;

  return (
    <View style={styles.signinview}>
      <Text>Sign In User</Text>
      <Text> itemId: {JSON.stringify(itemId)}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("ListScreens")}
      />
    </View>
  );
}

export default SignInScreen;
