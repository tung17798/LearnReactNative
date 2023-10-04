import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import styles from "../../sign_in/view/styles";


const ListScreen = (props) => {
    console.log(props)
    const friends = [
      { name: "Friend #1", age: 20 },
      { name: "Friend #2", age: 21 },
      { name: "Friend #3", age: 22 },
      { name: "Friend #4", age: 23 },
      { name: "Friend #5", age: 24 },
      { name: "Friend #6", age: 25 },
      { name: "Friend #7", age: 26 },
      { name: "Friend #8", age: 27 },
      { name: "Friend #9", age: 28 },
    ];
  
    return (
      <View>
   
        <FlatList
          keyExtractor={(friend) => friend.name} // nếu key trung thi sao
          data={friends}
          renderItem={({ item }) => {
            return (
              <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
              </Text>
            );
          }}
        />
         <Button
        onPress={() => props.navigation.navigate('Home')}
        title="Learn More"
      />
      </View>
    );
  };


export default ListScreen;