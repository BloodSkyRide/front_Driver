import { Pressable, Text, View } from 'react-native';

type BotonProps = {

  clase?: string,
  background?: string,
  texto: string,
  colorWriter?: string
};
export function Boton({clase, background,texto,colorWriter}: BotonProps) {

  return (
    <View>
      <Pressable className={background}>
        <Text className={clase} >{texto}</Text>
      </Pressable>
    </View>
  );
}

