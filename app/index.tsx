
import { Stack } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { Boton } from "./components/Boton";
import Logo from "./components/image";
import Input from "./components/input";

// OBTENER API_URL CORRECTO



export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {

      // Aquí iría tu fetch()
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
          

      <View className="flex-1 justify-center p-6" style={{ backgroundColor: "#13161C" }}>
        <View className="items-center justify-center">
          <Text className="text-5xl font-bold mb-6 text-center text-white">
            TrakerDriver
          </Text>
          <Logo />
        </View>

        <View
          style={{ backgroundColor: "#1E2229" }}
          className="p-5 rounded-3xl border border-gray-500 mt-5"
        >

          <Input placeholder="Usuario" />
          <Input placeholder="Contraseña" secureTextEntry />

          <View className="items-center mt-2">
            <Boton
              clase="text-white font-bold text-center"
              background="bg-lime-600 p-4 rounded-3xl px-6 py-3 w-40"
              texto="Iniciar Sesión"
            />
          </View>
        </View >

<View className="flex-row justify-between mt-3 w-90">
  <Boton clase="text-white font-bold" texto="No estás registrado?" />
  <Boton clase="text-white font-bold" texto="Olvidaste tu contraseña?" />
</View>



      </View>
    
    </>
  );
}
