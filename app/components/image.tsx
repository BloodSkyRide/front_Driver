import { Image } from "expo-image";
import { View, } from "react-native";




export default function imagen(){



    return (
        <View>

            <Image
  source={require("../../assets/images/FoxDrive.png")}
  style={{ width: 200, height: 200, borderRadius: 10 }}
  contentFit="cover"
/>

        </View>
    )
}