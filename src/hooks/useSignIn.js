import { useMutation, useApolloClient } from "@apollo/client";
import { SIGN_IN } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient()
  const [mutate, result] = useMutation(SIGN_IN)

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {username, password}
    })
    const accessToken = data.authenticate.accessToken
    await authStorage.setAccessToken(accessToken);
    await apolloClient.resetStore();
    return data?.authenticate;
  };

  return [signIn, result];
};

export default useSignIn;