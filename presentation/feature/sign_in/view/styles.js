import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingTop: 300,
    backgroundColor: "#FFFFFF",
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
  },
  textStyle: {
    fontSize: 20,
  },
  signinview: { flex: 1, alignItems: "center" },
  homeview: { flex: 1, alignItems:'center', justifyContent:'center'},
});

export default styles;
