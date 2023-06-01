import "./config/firebase";
import { ThemeProvider } from 'react-native-elements';
import RootNavigator from './navigation';

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}