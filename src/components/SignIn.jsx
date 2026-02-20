import { useFormik } from "formik";
import * as yup from 'yup';

import Text from "./Text";
import theme from "../theme";
import { TextInput, Pressable, View, StyleSheet } from "react-native";
import useSignIn from "../hooks/useSignIn";

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.mainBackground,
    borderRadius: 4,
    padding: 12,
    backgroundColor: "white",
  },
  errorText: {
    marginTop: 4,
    color: theme.colors.error,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
})

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput 
          style={[
            style.input,
            formik.touched.username && formik.errors.username && { borderColor: theme.colors.error }
          ]}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={style.errorText}>{formik.errors.username}</Text>
        )}
      </View>
      <View style={style.inputContainer}>
        <TextInput 
          style={[
            style.input,
            formik.touched.password && formik.errors.password && { borderColor: theme.colors.error }
          ]}
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          secureTextEntry={true}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={style.errorText}>{formik.errors.password}</Text>
        )}
      </View>
      <Pressable style={style.button} onPress={formik.handleSubmit}>
        <Text style={style.buttonText} fontWeight="bold" fontSize="subheading">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    
    try {
      const authenticatePayload = await signIn({ username, password });
      console.log(authenticatePayload);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;