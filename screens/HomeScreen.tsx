import { StatusBar } from "expo-status-bar";
import { getAuth, signOut } from "firebase/auth";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

const auth = getAuth();

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Button title="SIGN OUT" onPress={() => signOut(auth)} />
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
  },
});
