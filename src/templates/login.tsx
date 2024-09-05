import React, { useState } from "react";
import { View, Text, Alert, Pressable  } from "react-native";
import tailwind from "twrnc";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { TextInput } from "@/components/text-input";
import { Button } from "@/components/button";
import { Link } from "expo-router";
import { makeRedirectUri } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export const Login = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "573623442004-36roh1auetg2uu1oqbklijg7h0tl55eq.apps.googleusercontent.com",
    redirectUri: makeRedirectUri({
      useProxy: true,
    }),
  });
  const redirectUri = makeRedirectUri({ useProxy: true });
  console.log(redirectUri);

  // Verifique a resposta da autenticação
  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Login bem-sucedido!", `Token: ${authentication.accessToken}`);
    }
  }, [response]);

  return (
    <View
      style={tailwind`flex-1 w-full items-center justify-center bg-gray-950`}
    >
      <View style={tailwind`px-4 w-full max-w-sm`}>
        <Text style={tailwind`text-5xl font-bold mb-6 text-gray-50`}>
          Entre na sua conta :)
        </Text>

        {/* <View style={tailwind`flex flex-col gap-4`}>
          <TextInput placeholder="Insira o endereço de e-mail" />
          <TextInput placeholder="Insira a senha" />
        </View>

        <View style={tailwind`flex flex-row justify-between items-center my-8`}>
          <View style={tailwind`flex-row items-center`}>
            <Pressable
              style={tailwind`bg-gray-50 h-6 w-6 rounded-sm mr-2`}
            ></Pressable>
            <Text style={tailwind`text-gray-50`}>Lembrar senha</Text>
          </View>
          <Pressable>
            <Link
              href={`/templates/authentication/reset-password`}
              style={tailwind`text-gray-50 font-bold`}
            >
              Esqueci minha senha
            </Link>
          </Pressable>
        </View> */}

        <View style={tailwind`flex flex-col gap-4`}>
          {/* <Link href={`/templates/authentication/user-profile`} style={tailwind`w-full`}>
            <Button text="Login" variant="success" style={tailwind`w-full`} />
          </Link>{" "}
          <Link
            href={`/templates/authentication/signup`}
            style={tailwind`w-full`}
          >
            <Button
              text="Cadastro"
              variant="default"
              style={tailwind`w-full`}
            />
          </Link> */}
          {/* Botão de Login com Google */}
          <Button
            text="Login com Google"
            variant="default"
            onPress={() => promptAsync()}
            style={tailwind`w-full`}
          />
        </View>
      </View>
    </View>
  );
};
