import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const image = require("@/assets/Image/bg-vector.png");
const AddScreen = () => {
  return (
    <View style={{ height: "100%", backgroundColor: "#272dfd" }}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.bgImg}
      ></ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default AddScreen;
