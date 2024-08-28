import {
  Text,
  Button,
  StyleSheet,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

const Gallery = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.ScrollView}
        contentContainerStyle={styles.align}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 68,
            marginBottom: 50,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.replace("MeScreen");
            }}
          >
            {
              <Image
                source={require("@/assets/Image/icon/back-btn.png")}
                contentFit="contain"
                style={{ height: 48, width: 54, marginRight: 40 }}
              />
            }
          </Pressable>
          <Text style={styles.titleText}>Badge Collection</Text>
          <View>
            <Pressable>
              {
                <Image
                  source={require("@/assets/Image/icon/Menu.png")}
                  contentFit="contain"
                  style={{ height: 50, width: 52 }}
                />
              }
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              marginBottom: 20,
              marginRight: 116,
            }}
          >
            <Text style={styles.Big}>My</Text>
            <Text style={styles.Big}>Badges</Text>
          </View>
          {
            <Image
              source={require("@/assets/Image/pic.png")}
              contentFit="contain"
              style={{ height: 107, width: 117 }}
            />
          }
        </View>
        <View style={styles.barBg}>
          <Pressable
            onPress={() => {
              navigation.replace("BadgeCollection");
            }}
          >
            <Text style={styles.textBackground02}>Achievements</Text>
          </Pressable>

          <Pressable
          //   onPress={() => {
          //     navigation.replace("MeScreen");
          //   }}
          >
            <Text style={styles.textBackground}>Gallery</Text>
          </Pressable>
        </View>

        <View style={{ flexDirection: "column", marginBottom: 60 }}>
          {
            <Image
              source={require("@/assets/Image/icon/aquaLife.png")}
              contentFit="contain"
              style={{ height: 94, width: 155, marginBottom: 24 }}
            />
          }
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            {
              <Image
                source={require("@/assets/Image/Badges/seahorse.png")}
                contentFit="contain"
                style={{ height: 160, width: 180, marginRight: 36 }}
              />
            }
            {
              <Image
                source={require("@/assets/Image/Badges/octoBadge.png")}
                contentFit="contain"
                style={{ height: 160, width: 180 }}
              />
            }
          </View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            {
              <Image
                source={require("@/assets/Image/Badges/jellyfish.png")}
                contentFit="contain"
                style={{ height: 160, width: 180, marginRight: 36 }}
              />
            }
            {
              <Image
                source={require("@/assets/Image/Badges/butterflyfish.png")}
                contentFit="contain"
                style={{ height: 160, width: 180 }}
              />
            }
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          {
            <Image
              source={require("@/assets/Image/icon/aquaPlant.png")}
              contentFit="contain"
              style={{ height: 94, width: 155, marginBottom: 24 }}
            />
          }
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            {
              <Image
                source={require("@/assets/Image/Badges/staghorn.png")}
                contentFit="contain"
                style={{ height: 160, width: 180, marginRight: 36 }}
              />
            }
            {
              <Image
                source={require("@/assets/Image/Badges/anemone.png")}
                contentFit="contain"
                style={{ height: 160, width: 180 }}
              />
            }
          </View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            {
              <Image
                source={require("@/assets/Image/Badges/brainCoral.png")}
                contentFit="contain"
                style={{ height: 160, width: 180, marginRight: 36 }}
              />
            }
            {
              <Image
                source={require("@/assets/Image/Badges/pillarCoral.png")}
                contentFit="contain"
                style={{ height: 160, width: 180 }}
              />
            }
          </View>
        </View>
        <View style={{ flexDirection: "column", marginBottom: 60 }}>
          {
            <Image
              source={require("@/assets/Image/icon/landscape.png")}
              contentFit="contain"
              style={{ height: 94, width: 155, marginBottom: 24 }}
            />
          }
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            {
              <Image
                source={require("@/assets/Image/Badges/lrt.png")}
                contentFit="contain"
                style={{ height: 160, width: 180, marginRight: 36 }}
              />
            }
            {
              <Image
                source={require("@/assets/Image/Badges/tank.png")}
                contentFit="contain"
                style={{ height: 160, width: 180 }}
              />
            }
          </View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            {
              <Image
                source={require("@/assets/Image/Badges/shipwreck.png")}
                contentFit="contain"
                style={{ height: 160, width: 180, marginRight: 36 }}
              />
            }
            {
              <Image
                source={require("@/assets/Image/Badges/plane.png")}
                contentFit="contain"
                style={{ height: 160, width: 180 }}
              />
            }
          </View>
        </View>
      </ScrollView>
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
    marginRight: 32,
  },
  textBackground: {
    fontSize: 20,
    fontFamily: "idealista-bold",
    fontWeight: "bold",
    color: "#ede9de",
    backgroundColor: "#d02462",
    borderRadius: 8,
    transform: [{ rotate: "-4deg" }],
    padding: 12,
  },
  textBackground02: {
    fontSize: 16,
    fontFamily: "idealista-bold",
    color: "#8e8c85",

    borderRadius: 8,
  },
  barBg: {
    backgroundColor: "#ede9de",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    justifyContent: "space-around",
    borderRadius: 50,
    width: 396,
    height: 48,
  },
  ScrollView: {
    backgroundColor: "#272dfd",
    display: "flex",
    flex: 1,
    height: "100%",
  },
  align: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  Big: {
    fontFamily: "idealista-bold",
    fontSize: 40,
    color: "#ede9de",
  },
});

export default Gallery;
