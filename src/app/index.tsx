import { Login } from "@/templates/login";
import { View } from "react-native";
import tailwind from "twrnc";

export default function Page() {
  return (
    <View style={tailwind`flex-1 flex items-center justify-center p-8`}>
      <Login />
    </View>
  );
}
