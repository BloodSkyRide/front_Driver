import { Stack } from "expo-router";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View } from "react-native";
import { Boton } from "./components/Boton";
import Logo from "./components/image";
import Input from "./components/input";

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

      {/* Envuelve todo para que el teclado se cierre al tocar fuera */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <View className="flex-1 justify-center p-6" style={{ backgroundColor: "#13161C" }}>
            <View className="items-center justify-center">
              <Text className="text-5xl font-bold mb-6 text-center text-white">
                TripDrive
              </Text>
              <Logo />
            </View>

            <View
              style={{ backgroundColor: "#1E2229" }}
              className="p-5 rounded-3xl border border-gray-500 mt-5"
            >
              <Input placeholder="Usuario" icon="user" value={email} onChangeText={setEmail} />
              <Input placeholder="Contraseña" secureTextEntry icon="lock" value={password} onChangeText={setPassword} />

              <View className="items-center mt-2">
                <Boton
                  clase="text-white font-bold text-center"
                  background="bg-lime-600 p-4 rounded-3xl px-6 py-3 w-40"
                  texto="Iniciar Sesión"
                  
                />
              </View>
            </View>

            <View className="flex-row justify-between mt-3 w-90">
              <Boton clase="text-white font-bold" texto="No estás registrado?" />
              <Boton clase="text-white font-bold" texto="Olvidaste tu contraseña?" colorWriter="#55B04A" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
}
