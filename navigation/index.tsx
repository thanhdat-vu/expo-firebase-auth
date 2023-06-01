import { useAuth } from "../utils/useAuth";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";

export default function RootNavigator() {
  const { user } = useAuth();

  return user ? <AppStack /> : <AuthStack />;
}

