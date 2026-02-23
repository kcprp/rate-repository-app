import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import { useApolloClient, useQuery } from "@apollo/client";
import Text from "./Text";
import { Link, useNavigate } from "react-router-native";
import Constants from 'expo-constants';
import theme from "../theme";
import { ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";

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
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const signedIn = !!data?.me;

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate("/");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <Link to="/">
            <Text color="white" fontWeight="bold" style={styles.text}>Repositories</Text>
          </Link>
        </Pressable>
        {signedIn ? (
          <Pressable onPress={onSignOut}>
            <Text color="white" fontWeight="bold" style={styles.text}>Sign out</Text>
          </Pressable>
        ) : (
          <Pressable>
            <Link to="/sign-in">
              <Text color="white" fontWeight="bold" style={styles.text}>Sign-in</Text>
            </Link>
          </Pressable>
        )}
      </ScrollView>
    </View>
  )
};
export default AppBar;