import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "row",
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
        <Link to="/">
          <Text color="white" fontWeight="bold" style={styles.text}>Repositories</Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link to="/sign-in">
          <Text color="white" fontWeight="bold" style={styles.text}>Sign-in</Text>
        </Link>
      </Pressable>
    </View>
  )
};

export default AppBar;