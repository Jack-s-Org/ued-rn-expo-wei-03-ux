import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { Image, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Icon = createIconSetFromIcoMoon(
  require("@/assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);
export default function App() {
  const [fontsLoaded] = useFonts({
    "idealista-bold": require("@/assets/fonts/Idealista-Bold.ttf"),
    "idealista-medium": require("@/assets/fonts/IdealistaMedium.ttf"),
    "idealista-SemiBold": require("@/assets/fonts/IdealistaSemiBold.ttf"),
    "Signika-Bold": require("@/assets/fonts/Signika-Bold.ttf"),
    "Signika-Medium": require("@/assets/fonts/Signika-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <View style={{ height: "100%" }}>
        {<RootNavigator />}
        {/* {<Icon name="x-button" size={32} color="red" />} */}
        {/* {
          <Image
            source={require("@/assets/Image/Bg.png")}
            style={{ height: "100%", width: "100%" }}
          />
        } */}
        {/* <VideoPlayer /> */}
        {/* <SwipeableCarouselNormalHorizontal></SwipeableCarouselNormalHorizontal> */}
      </View>
    </SafeAreaProvider>
  );
}
