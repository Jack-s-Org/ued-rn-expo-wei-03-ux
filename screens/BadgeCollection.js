import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";

// const image={}
const image = require("@/assets/Image/bg-vector.png");
const BadgeCollection = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImg}>
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
                  style={{ height: 50, width: 54 }}
                />
              }
            </Pressable>
          </View>
        </View>
        {/* my badge  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 28,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginBottom: 20,
              marginRight: 116,
              paddingLeft: 12,
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
        {/* bar selection */}

        <View style={styles.barBg}>
          <Pressable
            onPress={() => {
              navigation.replace("BadgeCollection");
            }}
          >
            <Text style={styles.textBackground}>Achievements</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.replace("Gallery");
            }}
          >
            <Text style={styles.textBackground02}>Gallery</Text>
          </Pressable>
        </View>
        {/* badges */}
        <View
          style={{ flexDirection: "column", marginBottom: 16, padding: 16 }}
        >
          {/* 1st row */}
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Pressable
              onPress={() => {
                navigation.replace("TurtleBadge");
              }}
              options={{ animation: "fade_from_bottom" }}
            >
              {
                <Image
                  source={require("@/assets/Image/Badges/turtleMaster.png")}
                  contentFit="contain"
                  style={{ height: 160, width: 180, marginRight: 36 }}
                />
              }
            </Pressable>

            {
              <Image
                source={require("@/assets/Image/Badges/nemo.png")}
                contentFit="contain"
                style={{ height: 160, width: 180 }}
              />
            }
          </View>
          {/* 2nd row */}
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            {
              <Image
                source={require("@/assets/Image/Badges/SharkSpotter.png")}
                contentFit="contain"
                style={{ height: 160, width: 180, marginRight: 36 }}
              />
            }
            {
              <Image
                source={require("@/assets/Image/Badges/mantaBadge.png")}
                contentFit="contain"
                style={{ height: 160, width: 180 }}
              />
            }
          </View>
        </View>
      </ImageBackground>
      {/* title */}
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
  Big: {
    fontFamily: "idealista-bold",
    fontSize: 40,
    color: "#ede9de",
  },
  bgImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

export default BadgeCollection;
