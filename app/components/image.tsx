import { Image } from "expo-image";
import { View, } from "react-native";




export default function imagen(){



    return (
        <View>

            <Image
  source="https://reactnative.dev/img/tiny_logo.png"
  style={{ width: 120, height: 120, borderRadius: 10 }}
  contentFit="cover"
/>

        </View>
    )
}