import { View, Text } from "react-native";
import tailwind from "twrnc";
import { TextInput } from "@/components/text-input";
import { Button } from "@/components/button";

export const PasswordReset = () => {
  return (
    <View
      style={tailwind`flex-1 w-full items-center justify-center bg-gray-950`}
    >
      <View style={tailwind`px-4 w-full max-w-sm`}>
        <Text style={tailwind`text-5xl font-bold mb-6 text-gray-50`}>
          Altere sua senha
        </Text>

        <Text style={tailwind`text-gray-50 mb-8 text-base`}>
          Esqueceu sua senha? Insira seu endereço de e-mail abaixo e você receberá um link para criar uma nova senha.
        </Text>

        <TextInput style={tailwind`mb-4`} placeholder="Insira seu endereço de e-mail." />

        <Button text="Alterar senha" variant="success" />
      </View>
    </View>
  );
};
