// app/index.tsx
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Boton } from './components/Boton';
import Logo from './components/image'; // componentes reutilizables
import Input from './components/input';

// const StyledView = styled(View);

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí va tu lógica de autenticación real
    if (email && password) {
    //   router.push('/HomeScreen'); // navega a la pantalla principal después del login
    }
  };

  return (
      <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 justify-center p-6 bg-gray-100">

        <View className='items-center justify-center'>

      <Text className="text-2xl font-bold mb-6 text-center">TrakerDriver</Text>
      <Logo></Logo>
        </View>

      <Input placeholder="Usuario"/>
      <Input placeholder="Contraseña" secureTextEntry={true}/>

      {/* <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry /> */}

      <View className='items-center'>
        <Boton clase="text-white font-bold text-center" background="bg-blue-500 p-4 rounded-3xl px-6 py-3 w-40" texto="Iniciar Sesión"/>
      </View>
    </View>
      </>


  );
}