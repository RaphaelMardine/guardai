import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import tailwind from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Avatar } from "@/components/avatar";

export const UserProfile = () => {
  return (
    <SafeAreaView style={tailwind`w-full flex-1 bg-gray-950`}>
      <View style={tailwind`flex-1 items-center justify-center gap-8`}>
        <Avatar source={{ uri: "https://source.unsplash.com/random" }} />
        <View style={tailwind`gap-2 items-center`}>
          <Text style={tailwind`text-gray-50 text-3xl font-bold`}>
            John Doe
          </Text>
          <Text style={tailwind`text-gray-50 text-lg`}>johndoe@ambizzion.com</Text>
        </View>
      </View>
      <View style={tailwind`flex-1 justify-center gap-8`}>
        <Pressable style={tailwind`flex-row items-center gap-2 px-8`}>
          <Ionicons name="settings-outline" size={24} color="#fff" />
          <Text style={tailwind`text-gray-50 text-lg`}>Configurações</Text>
        </Pressable>
        <Pressable style={tailwind`flex-row items-center gap-2 px-8`}>
          <Ionicons name="help-buoy-outline" size={24} color="#fff" />
          <Text style={tailwind`text-gray-50 text-lg`}>Ajuda</Text>
        </Pressable>
        <Pressable style={tailwind`flex-row items-center gap-2 px-8`}>
          <MaterialIcons name="logout" size={24} color="#fff" />
          <Text style={tailwind`text-gray-50 text-lg`}>Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
