import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

const image = require("@/assets/Image/red-bg.png");
const whiteBG = require("@/assets/Image/white-bg.png");
const screenBG = require("@/assets/Image/turtle-bg.png");
const TurtleDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <ImageBackground
          source={screenBG}
          resizeMode="cover"
          style={styles.screenBG}
        >
          {/* head */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              justifyContent: "space-between",
              padding: 32,
            }}
          >
            <View>
              <Pressable
                onPress={() => {
                  navigation.replace("DiscoverScreen");
                }}
              >
                {
                  <Image
                    source={require("@/assets/Image/icon/back-btn.png")}
                    contentFit="contain"
                    style={{ height: 48, width: 54 }}
                  />
                }
              </Pressable>
            </View>

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
          {/* Profile Img */}
          <View>
            {
              <Image
                source={require("@/assets/Image/MainProfile/td.png")}
                contentFit="contain"
                style={{ height: 330, width: 408 }}
              />
            }
          </View>
          {/* name   */}
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              paddingLeft: 28,
            }}
          >
            <Text style={styles.bigName}>Hawksbill Turtle</Text>
          </View>
          {/* Active Season */}
          <View>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.redBg}
            >
              <View
                style={{ flexDirection: "row", marginTop: 40, marginLeft: 60 }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: 12,
                  }}
                >
                  <Text style={styles.title01}>Most</Text>
                  <Text style={styles.title02}>Active</Text>
                  <Text style={styles.title01}>Season</Text>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    marginLeft: 60,
                    alignItems: "flex-start",
                  }}
                >
                  <Text style={styles.bodyTextWhite}>Visit them between</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.blueHighlight}>July</Text>
                    <Text style={styles.bodyTextWhite}>and</Text>
                    <Text style={styles.blueHighlight02}>October</Text>
                  </View>
                  <Text style={styles.bodyTextWhite}>
                    to see turtle hatching
                  </Text>
                </View>
                <Image
                  source={require("@/assets/Image/icon/link.png")}
                  style={{ width: 50, height: 50, marginTop: 40 }}
                ></Image>
              </View>
            </ImageBackground>
            {/* do you know  */}
            <ImageBackground
              source={whiteBG}
              resizeMode="cover"
              style={styles.whiteBG}
            >
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginLeft: 22,
                    marginTop: 32,
                  }}
                >
                  <Text style={styles.titleBlue}>Do You</Text>
                  <Text style={styles.titleRed}>Know?</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 48,
                    marginTop: 20,
                    marginRight: 4,
                  }}
                >
                  <Text style={styles.bodyTextBlue}>
                    Hawksbill Turtle are named after their
                  </Text>
                  <Text style={styles.bodyTextBlue}>
                    pointed beaks, which resemble those
                  </Text>
                  <Text style={styles.bodyTextBlue}>of birds.</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.bodyTextBlue}>They are one of the</Text>
                    <Text style={styles.redHighlight}>smallest species</Text>
                  </View>
                  <Text style={styles.bodyTextBlue}>
                    of sea turtles, smaller size means that
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.bodyTextBlue}>it is the</Text>
                    <Text style={styles.redHighlight02}>fastest swimmer</Text>
                    <Text style={styles.bodyTextBlue}>of all turtle </Text>
                  </View>
                  <Text style={styles.bodyTextBlue}>species</Text>
                </View>
              </View>
            </ImageBackground>
            {/* might also like */}
            <View style={{ marginBottom: 40 }}>
              <View
                style={{
                  flexDirection: "row",
                  // paddingRight: 80,
                  width: "100%",
                  alignItems: "center",
                  paddingLeft: 12,
                  marginBottom: 28,
                }}
              >
                {
                  <Image
                    source={require("@/assets/Image/icon/buddy.png")}
                    contentFit="contain"
                    style={{ height: 60, width: 57, marginRight: 12 }}
                  />
                }
                <Text style={styles.sectionText}>You might also like</Text>
                <Pressable
                  // onPress={() => {
                  //   navigation.replace("BadgeCollection");
                  // }}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.seeAll}>See all</Text>
                  <Image
                    source={require("@/assets/Image/icon/seeAllArrow.png")}
                    contentFit="contain"
                    style={{ height: 24, width: 16 }}
                  />
                </Pressable>
              </View>
              {/* content */}

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: 12,
                  marginBottom: 12,
                }}
              >
                <Pressable
                // onPress={() => {
                //   navigation.replace("TurtleDetail");
                // }}
                >
                  <View style={styles.animalProfile}>
                    {
                      <Image
                        source={require("@/assets/Image/Smallprofile/manta.png")}
                        contentFit="contain"
                        style={styles.smallprofile}
                      />
                    }
                    <Text style={styles.smText}>Manta Ray</Text>
                  </View>
                </Pressable>

                <View style={styles.animalProfile}>
                  {
                    <Image
                      source={require("@/assets/Image/Smallprofile/clownfish.png")}
                      contentFit="contain"
                      style={styles.smallprofile}
                    />
                  }
                  <Text style={styles.smText}>Clownfish</Text>
                </View>
                <View style={styles.animalProfile}>
                  {
                    <Image
                      source={require("@/assets/Image/Smallprofile/octopus.png")}
                      contentFit="contain"
                      style={styles.smallprofile}
                    />
                  }
                  <Text style={styles.smText}>Octopus</Text>
                </View>
                <View style={styles.animalProfile}>
                  {
                    <Image
                      source={require("@/assets/Image/Smallprofile/dolphin.png")}
                      contentFit="contain"
                      style={styles.smallprofile}
                    />
                  }
                  <Text style={styles.smText}>Dolphin</Text>
                </View>
                <View style={styles.animalProfile}>
                  {
                    <Image
                      source={require("@/assets/Image/Smallprofile/reefShark.png")}
                      contentFit="contain"
                      style={styles.smallprofile}
                    />
                  }
                  <Text style={styles.smText}>Reef Shark</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
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
  ScrollView: {
    backgroundColor: "#272dfd",
    display: "flex",
    flex: 1,
    height: "100%",
  },
  screenBG: {
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
  bigName: {
    fontFamily: "idealista-bold",
    fontSize: 36,
    color: "#ede9de",
  },
  whiteBG: {
    width: 392,
    height: 316,
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 40,
  },

  redBg: {
    width: 400,
    height: 204,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionText: {
    fontSize: 20,
    fontFamily: "idealista-bold",
    color: "#ede9de",
    marginRight: 48,
  },
  seeAll: {
    color: "#B2AFA7",
    fontFamily: "idealista-SemiBold",
    fontSize: 14,
    marginRight: 4,
  },
  smText: {
    fontFamily: "idealista-bold",
    fontSize: 24,
    color: "#ede9de",
  },
  smallprofile: {
    width: 133,
    height: 120,
    marginBottom: 16,
  },
  animalProfile: {
    alignItems: "center",

    marginRight: 36,
  },
  title01: {
    fontFamily: "idealista-bold",
    fontSize: 24,
    color: "#ede9de",
  },
  title02: {
    fontFamily: "idealista-bold",
    fontSize: 24,
    color: "#ede9de",
    backgroundColor: "#272dfd",
    margin: 4,
    padding: 4,
    transform: [{ rotate: "-4deg" }],
  },
  titleBlue: {
    fontFamily: "Signika-Bold",
    fontSize: 24,
    color: "#272dfd",
  },
  titleRed: {
    fontFamily: "idealista-bold",
    fontSize: 24,
    color: "#ede9de",
    backgroundColor: "#d02462",
    margin: 4,
    padding: 4,
    transform: [{ rotate: "-4deg" }],
  },
  bodyTextBlue: {
    fontFamily: "idealista-bold",
    fontSize: "18",
    color: "#272dfd",
  },
  redHighlight: {
    fontFamily: "Signika-Bold",
    fontSize: "18",
    color: "#ede9de",
    backgroundColor: "#d02462",
    margin: 4,
    padding: 4,
    transform: [{ rotate: "4deg" }],
  },
  redHighlight02: {
    fontFamily: "Signika-Bold",
    fontSize: "18",
    color: "#ede9de",
    backgroundColor: "#d02462",
    margin: 4,
    padding: 4,
    transform: [{ rotate: "-4deg" }],
  },
  bodyTextWhite: {
    fontFamily: "idealista-bold",
    fontSize: "18",
    color: "#ede9de",
  },
  blueHighlight: {
    fontFamily: "idealista-bold",
    fontSize: "18",
    color: "#ede9de",
    backgroundColor: "#272dfd",
    margin: 4,
    padding: 4,
    transform: [{ rotate: "-4deg" }],
  },
  blueHighlight02: {
    fontFamily: "idealista-bold",
    fontSize: "18",
    color: "#ede9de",
    backgroundColor: "#272dfd",
    margin: 4,
    padding: 4,
    transform: [{ rotate: "4deg" }],
  },
});

export default TurtleDetail;
