import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const AVATARS = [
  "https://i.pravatar.cc/200?img=47",
  "https://i.pravatar.cc/200?img=12",
];

export default function App() {
  const [nome, setNome] = useState("");
  const [avatarIndex, setAvatarIndex] = useState(0);

  const trocarFoto = () =>
    setAvatarIndex((prev) => (prev + 1) % AVATARS.length);

  const salvarPerfil = () => {
    if (!nome.trim()) {
      Alert.alert("Atenção", "Por favor, insira seu nome!");
      return;
    }
    Alert.alert("Perfil Salvo!", Olá, ${nome.trim()}! 👋);
  };

  return (
    <SafeAreaView style={s.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={s.kav}
      >
        {/* TOPO — Foto circular */}
        <View style={s.top}>
          <View style={s.avatarWrap}>
            <Image
              source={{ uri: AVATARS[avatarIndex] }}
              style={s.avatar}
              resizeMode="cover"
            />
          </View>
          <TouchableOpacity style={s.swapBtn} onPress={trocarFoto}>
            <Text style={s.swapText}>Trocar foto</Text>
          </TouchableOpacity>
        </View>

        {/* MEIO — Campo de texto */}
        <View style={s.middle}>
          <Text style={s.label}>Seu nome</Text>
          <TextInput
            style={s.input}
            placeholder="Digite seu nome..."
            placeholderTextColor="#bbb"
            value={nome}
            onChangeText={setNome}
            maxLength={32}
            autoCorrect={false}
          />
          {/* Preview do cartão */}
          <View style={s.card}>
            <Image
              source={{ uri: AVATARS[avatarIndex] }}
              style={s.miniAvatar}
              resizeMode="cover"
            />
            <View>
              <Text style={s.cardName}>{nome.trim() || "Elaine Silva"}</Text>
              <Text style={s.cardSub}>Membro desde 2025</Text>
            </View>
          </View>
        </View>

        {/* BASE — Botão salvar */}
        <View style={s.bottom}>
          <TouchableOpacity style={s.saveBtn} onPress={salvarPerfil}>
            <Text style={s.saveTxt}>Salvar Perfil</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  kav: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: "space-between",
  },

  // TOPO
  top: {
    alignItems: "center",
    gap: 12,
  },
  avatarWrap: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#6c63ff",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
  },
  swapBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#f0eeff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d4d0ff",
  },
  swapText: {
    color: "#6c63ff",
    fontWeight: "500",
    fontSize: 14,
  },

  // MEIO
  middle: {
    gap: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#999",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  input: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    borderRadius: 14,
    backgroundColor: "#fafafa",
    color: "#222",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#f8f7ff",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#e8e6ff",
    padding: 14,
  },
  miniAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#6c63ff",
  },
  cardName: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
  },
  cardSub: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 2,
  },

  // BASE
  bottom: {},
  saveBtn: {
    width: "100%",
    paddingVertical: 16,
    backgroundColor: "#6c63ff",
    borderRadius: 16,
    alignItems: "center",
  },
  saveTxt: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
