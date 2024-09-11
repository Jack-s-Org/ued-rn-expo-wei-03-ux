import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import SwipeNormalH03 from "@/Components/SwipeableCarousel/SwipeNormalH03";
const image = require("@/assets/Image/bg-vector.png");
const Landscape = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImg}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 40,
              justifyContent: "center",
            }}
          >
            <Text style={styles.titleText}>Discover</Text>
            <View>
              <Pressable>
                {
                  <Image
                    source={require("@/assets/Image/icon/Menu.png")}
                    contentFit="contain"
                    style={{ height: 50, width: 54 }}
                  />
                }
              </Pressable>
            </View>
          </View>
          {/* bar selection */}
          <View style={styles.barBg}>
            <Pressable
              onPress={() => {
                navigation.replace("DiscoverScreen");
              }}
            >
              <Text style={styles.textBackground02}>Aquatic Life</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.replace("AquaticPlant");
              }}
            >
              <Text style={styles.textBackground02}>Aquatic Plant</Text>
            </Pressable>
            <Pressable
            //   onPress={() => {
            //     navigation.replace("Gallery");
            //   }}
            >
              <Text style={styles.textBackground}>Landscape</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <SwipeNormalH03></SwipeNormalH03>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#272dfd",
  },
  titleText: {
    fontSize: 24,
    fontFamily: "idealista-bold",
    fontWeight: "bold",
    color: "#ede9de",
    marginRight: 28,
  },
  barBg: {
    backgroundColor: "#ede9de",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    justifyContent: "space-evenly",
    borderRadius: 50,
    width: 396,
    height: 48,
  },
  textBackground: {
    fontSize: 16,
    fontFamily: "idealista-bold",
    fontWeight: "bold",
    color: "#ede9de",
    backgroundColor: "#d02462",
    borderRadius: 8,
    transform: [{ rotate: "-4deg" }],
    padding: 12,
  },
  textBackground02: {
    fontSize: 12,
    fontFamily: "idealista-bold",
    color: "#8e8c85",

    borderRadius: 8,
  },
  bgImg: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default Landscape;
