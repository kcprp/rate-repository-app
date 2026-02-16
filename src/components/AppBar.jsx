import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import Constants from 'expo-constants';
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background
  },
  text: {
    color: "#FFFFFF",
    marginBottom: 20,
    marginLeft: 12
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text color="white" fontWeight="bold" style={styles.text}>Repositories</Text>
      </Pressable>
    </View>
  )
};

export default AppBar;