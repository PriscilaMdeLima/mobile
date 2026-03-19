import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import News from "./components/news";
import PerfilRapido from "./components/PerfilRapido";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <PerfilRapido />
      <News />
    </View>
  );
}

