import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Button, Text, Icon, Input } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export function SignUpScreen({ navigation }: any) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleSignUp() {
    try {
      createUserWithEmailAndPassword(auth, values.email, values.password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text h3>Sign up</Text>
      <View style={styles.controls}>
        <Input
          placeholder="Email"
          value={values.email}
          onChangeText={(email: string) => setValues({ ...values, email })}
          leftIcon={<Icon name="mail" type="feather" size={24} />}
        />
        <Input
          placeholder="Password"
          value={values.password}
          onChangeText={(password: string) =>
            setValues({ ...values, password })
          }
          secureTextEntry={true}
          leftIcon={<Icon name="lock" type="feather" size={24} />}
        />
        <Input
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChangeText={(confirmPassword: string) =>
            setValues({ ...values, confirmPassword })
          }
          secureTextEntry={true}
          leftIcon={<Icon name="lock" type="feather" size={24} />}
        />
        <Button title="SIGN UP" onPress={handleSignUp} />
        <View style={styles.spacer} />
        <Text style={styles.question}>Already have an account?</Text>
        <Button
          title="SIGN IN"
          type="outline"
          onPress={() => navigation.navigate("Sign In")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  controls: {
    flex: 1,
    width: "100%",
  },
  spacer: {
    flex: 1,
    minHeight: 40,
  },
  question: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 16,
  },
});
