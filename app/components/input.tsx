// components/Input.tsx
import { TextInput, View } from "react-native";

type InputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void,
  secureTextEntry?: boolean
};

export default function Input({ placeholder, value, onChangeText,secureTextEntry }: InputProps) {
  return (
    <View className="my-2">
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="bg-white border border-gray-300 rounded-2xl px-4 py-3 text-gray-800 text-base  space-y-4"
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
}
