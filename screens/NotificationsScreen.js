import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import SwipeableMap from "@/Components/SwipeableCarousel/SwipeableMap";
const image = require("@/assets/Image/bg-vector.png");
const UncleLim = require("@/assets/Image/Squad/Vector-grp.png");
const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImg}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <Text style={styles.titleText}>Discovery Map</Text>
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
          <View style={{ width: "100%" }}>
            <SwipeableMap></SwipeableMap>
          </View>
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
  bgImg: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  titleText: {
    fontSize: 24,
    fontFamily: "idealista-bold",
    fontWeight: "bold",
    color: "#ede9de",
    marginRight: 28,
  },
  ScrollView: {
    // backgroundColor: "#272dfd",
    display: "flex",
    flex: 1,
    height: "100%",
  },
  align: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
});

export default NotificationsScreen;
