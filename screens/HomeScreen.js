import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";

const image = require("@/assets/Image/homeBG.png");
const Satang = require("@/assets/Image/diveLocation/Satang.png");
const Tioman = require("@/assets/Image/diveLocation/Tioman.png");
const Perhentian = require("@/assets/Image/diveLocation/Perhentian.png");
const vector = require("@/assets/Image/diveLocation/Vector.png");
const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.ScrollView}>
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImg}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 14,
            marginBottom: 28,
            marginTop: 40,
          }}
        >
          {/* goodMorning */}
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginRight: 180,
            }}
          >
            <View>
              <Text style={styles.titleText}>Good Morning</Text>
            </View>
            <View>
              <Text style={styles.name}>Michael</Text>
            </View>
          </View>
          {/* menuBTN */}
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
        {/* e-card */}
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("@/assets/Image/Card.png")}
            contentFit="contain"
            style={{ height: 220, width: 405 }}
          />
        </View>
        {/* // Profile Section */}
        <View style={{ flexDirection: "column", marginBottom: 48 }}>
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
            <Text style={styles.sectionText}>Buddy in your area</Text>
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
              marginBottom: 4,
            }}
          >
            <Pressable
              onPress={() => {
                navigation.replace("TurtleDetail");
              }}
            >
              <View style={styles.animalProfile}>
                {
                  <Image
                    source={require("@/assets/Image/Smallprofile/turtle.png")}
                    contentFit="contain"
                    style={styles.smallprofile}
                  />
                }
                <Text style={styles.smText}>Sea Turtle</Text>
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
        {/* popular dive location */}
        <View style={{ flexDirection: "column", marginBottom: 42 }}>
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
                source={require("@/assets/Image/icon/location.png")}
                contentFit="contain"
                style={{ height: 60, width: 57, marginRight: 12 }}
              />
            }
            <Text style={styles.sectionText}>Popular dive location</Text>
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* Pulau Satang */}
            <ImageBackground
              source={Satang}
              style={{ width: 280, height: 200, marginLeft: 12 }}
            >
              <Text style={styles.location}>Pulau Satang</Text>
              <Text style={styles.location02}>National Park</Text>
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Image
                  source={require("@/assets/Image/diveLocation/Satang-grp.png")}
                  style={{
                    width: 80,
                    height: 30,
                    marginLeft: 20,
                    marginTop: 12,
                  }}
                ></Image>
                <ImageBackground
                  source={vector}
                  style={{ width: 28, height: 29, marginLeft: 8 }}
                ></ImageBackground>
              </View>
              <Image
                source={require("@/assets/Image/icon/arrow-btn.png")}
                style={{
                  width: 44,
                  height: 40,
                  marginLeft: 240,
                  marginTop: -21,
                }}
              ></Image>
            </ImageBackground>

            {/* Pulau Tioman  */}
            <ImageBackground
              source={Tioman}
              style={{ width: 280, height: 200, marginLeft: 28 }}
            >
              <Text style={styles.location}>Juara Beach</Text>
              <Text style={styles.location02}>Pulau Tioman</Text>
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Image
                  source={require("@/assets/Image/diveLocation/Tioman-grp.png")}
                  style={{
                    width: 80,
                    height: 30,
                    marginLeft: 20,
                    marginTop: 12,
                  }}
                ></Image>
                <ImageBackground
                  source={vector}
                  style={{ width: 28, height: 29, marginLeft: 8 }}
                ></ImageBackground>
              </View>
              <Image
                source={require("@/assets/Image/icon/arrow-btn.png")}
                style={{
                  width: 44,
                  height: 40,
                  marginLeft: 240,
                  marginTop: -21,
                }}
              ></Image>
            </ImageBackground>

            {/* Pulau Perhentian */}
            <ImageBackground
              source={Perhentian}
              style={{
                width: 280,
                height: 200,
                marginLeft: 28,
                marginRight: 28,
              }}
            >
              <Text style={styles.location}>Pulau</Text>
              <Text style={styles.location02}>Perhentian</Text>
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Image
                  source={require("@/assets/Image/diveLocation/Perhentian-grp.png")}
                  style={{
                    width: 80,
                    height: 30,
                    marginLeft: 20,
                    marginTop: 12,
                  }}
                ></Image>
                <ImageBackground
                  source={vector}
                  style={{ width: 28, height: 29, marginLeft: 8 }}
                ></ImageBackground>
              </View>
              <Image
                source={require("@/assets/Image/icon/arrow-btn.png")}
                style={{
                  width: 44,
                  height: 40,
                  marginLeft: 240,
                  marginTop: -21,
                }}
              ></Image>
            </ImageBackground>
          </ScrollView>
        </View>
        <View style={{ alignItems: "center", marginTop: 48 }}>
          <Image
            source={require("@/assets/Image/IG.png")}
            style={{ width: 400, height: 320 }}
          ></Image>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#272dfd",
    marginTop: 80,
    height: "100%",
  },
  ScrollView: {
    backgroundColor: "#272dfd",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
  },

  bgImg: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  titleText: {
    fontFamily: "idealista-bold",
    fontSize: 20,
    color: "#ede9de",
    marginBottom: 10,
  },
  name: {
    fontFamily: "idealista-bold",
    fontSize: 32,
    color: "#ede9de",
    backgroundColor: "#d02462",
    padding: 8,
    transform: [{ rotate: "-2deg" }],
  },
  smallprofile: {
    width: 133,
    height: 120,
    marginBottom: 16,
  },
  animalProfile: {
    alignItems: "center",

    marginRight: 48,
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
  location: {
    fontFamily: "idealista-bold",
    fontSize: 20,
    color: "#ede9de",
    marginLeft: 20,
    marginTop: 100,
  },
  location02: {
    fontFamily: "idealista-bold",
    fontSize: 20,
    color: "#ede9de",
    marginLeft: 20,
  },
  smallText: {
    fontFamily: "idealista-bold",
    fontSize: 12,
    color: "#ede9de",
  },
});

export default HomeScreen;
