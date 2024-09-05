import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tailwind from "twrnc";
import { Link } from "expo-router";
import { Login } from "@/templates/login";

export default function Page() {
  return (
    <View style={tailwind`flex-1 flex items-center justify-center p-8`}>
      <Login />
    </View>
  );
}
