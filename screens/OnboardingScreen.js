import {
  Image,
  ImageBackground,
  Pressable,
  View,
  StyleSheet,
} from "react-native";
const image = require("@/assets/Image/Onboarding/Onboard-01.png");
const OnboardingScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <Pressable
          onPress={() => {
            navigation.replace("Login");
          }}
        >
          <Image
            source={require("@/assets/Image/icon/next-btn.png")}
            contentFit="contain"
            style={styles.btn}
          />
        </Pressable>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    // position: "absolute",
    bottom: -840,
    right: -350,
    height: 48,
    width: 54,
  },
});
export default OnboardingScreen;
