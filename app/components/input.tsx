// components/Input.tsx
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, View } from "react-native";

type InputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  icon?: "user" | "lock"; // ícono opcional
};

export default function Input({ placeholder, value, onChangeText, secureTextEntry, icon }: InputProps) {

  const [isFocused, setIsFocused] = useState(false);
  return (

    <View className="my-2">
      <View className={`flex-row items-center border rounded-2xl px-4 py-3 ${ isFocused ? "bg-white border-lime-500" : "bg-transparent border-gray-300"}`}>
        {icon && <FontAwesome name={icon} size={20} color="gray" className="mr-3" />}
        <TextInput
        style= {{color: isFocused ? "gray": "white"}}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          className="flex-1 text-white text-base"
          placeholderTextColor="#9CA3AF"
          onFocus={() => {setIsFocused(true)
          }}
          onBlur={() => setIsFocused(false)}

        />
      </View>
    </View>
  );
}
