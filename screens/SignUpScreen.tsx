import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Button, Text, Icon, Input } from "react-native-elements";

export function SignUpScreen({ navigation }: any) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <View style={styles.container}>
      <Text h3>Sign up</Text>
      <View style={styles.controls}>
        <Input
          placeholder="Username"
          value={values.username}
          onChangeText={(username: string) =>
            setValues({ ...values, username })
          }
          leftIcon={<Icon name="user" type="feather" size={24} />}
        />
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
        <Button title="SIGN UP" onPress={() => console.log("Sign up")} />
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
