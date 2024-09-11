import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
// import { RotateInUpRight } from "react-native-reanimated";
// import { SafeAreaView } from "react-native-safe-area-context";
const image = require("@/assets/Image/badge-bg.png");

const TurtleBadge = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="contain" style={styles.bgImg}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 60,

            padding: 32,
          }}
        >
          <View>
            <Pressable
              onPress={() => {
                navigation.replace("BadgeCollection");
              }}
            >
              {
                <Image
                  source={require("@/assets/Image/icon/cancel-btn.png")}
                  contentFit="contain"
                  style={{ height: 54, width: 60, marginRight: 240 }}
                />
              }
            </Pressable>
          </View>
          <View>
            <Pressable>
              {
                <Image
                  source={require("@/assets/Image/icon/share-btn.png")}
                  contentFit="contain"
                  style={{ height: 68, width: 70 }}
                />
              }
            </Pressable>
          </View>
        </View>
        <View
          style={{
            marginBottom: 24,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {
            <Image
              source={require("@/assets/Image/Badges/tm.png")}
              contentFit="contain"
              style={{ height: 320, width: 360 }}
            />
          }
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.bigText}> You earn a new</Text>
          <Text style={styles.bigText}> badge by</Text>
          <Text style={styles.bigText}> adding remark !</Text>
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
  bigText: {
    fontSize: 32,
    fontFamily: "idealista-bold",
    fontWeight: "bold",
    color: "#ede9de",
    marginBottom: 12,
  },
  idealistaBold: {
    fontFamily: "Idealista-Bold",
    fontSize: 32,
    color: "#ede9de",
  },
  bgImg: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default TurtleBadge;
