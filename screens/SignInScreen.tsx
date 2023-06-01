import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Button, Text, Icon, Input } from "react-native-elements";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export function SignInScreen({ navigation }: any) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function handleSignIn() {
    try {
      signInWithEmailAndPassword(auth, values.email, values.password).then(
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
      <Text h3>Sign in</Text>
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
        <Button title="SIGN IN" onPress={handleSignIn} />
        <View style={styles.spacer} />
        <Text style={styles.question}>Don't have an account?</Text>
        <Button
          title="SIGN UP"
          type="outline"
          onPress={() => navigation.navigate("Sign Up")}
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
    minHeight: 200,
  },
  question: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 16,
  },
});
