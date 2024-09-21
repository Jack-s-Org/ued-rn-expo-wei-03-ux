import { useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import { Video } from "expo-av";
const LogoAnimation = ({ navigation }) => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigation.replace("OnboardingScreen");
    }, 5800);

    return () => window.clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Video
        source={require("@/assets/Video/LogoAnimation.mp4")}
        style={styles.video}
        resizeMode="cover"
        isLooping
        shouldPlay
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
export default LogoAnimation;
