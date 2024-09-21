import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
const image = require("@/assets/Image/ProfileBG.png");
// import { SafeAreaView } from "react-native-safe-area-context";

const MeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.ScrollView} contentContainerStyle={styles.align}>
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImg}>
        <View style={{ alignItems: "center" }}>
          {/* back btn */}
          <View style={{ marginTop: 40 }}>
            <Pressable
              onPress={() => {
                navigation.replace("Main");
              }}
            >
              {
                <Image
                  source={require("@/assets/Image/icon/back-btn.png")}
                  contentFit="contain"
                  style={{ height: 48, width: 54, marginRight: 240 }}
                />
              }
            </Pressable>
          </View>
          {/* profile pic */}
          <View style={{ marginBottom: 20 }}>
            {
              <Image
                source={require("@/assets/Image/Profile_Pic.png")}
                contentFit="contain"
                style={{ height: 241, width: 282 }}
              />
            }
          </View>
          {/* name & blue tick */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <View>
              <Text style={styles.name}>Michael</Text>
            </View>
            <View>
              {
                <Image
                  source={require("@/assets/Image/icon/blueTick.png")}
                  contentFit="contain"
                  style={{ height: 28, width: 28 }}
                />
              }
            </View>
          </View>
          {/* tag  */}

          <View style={{ flexDirection: "row", marginBottom: 12 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View style={{ borderRadius: 50, backgroundColor: "#0e1059" }}>
                <Text style={styles.tag}>Open Water Diver</Text>
              </View>
              <View style={{ borderRadius: 50, backgroundColor: "#0e1059" }}>
                <Text style={styles.tag}>Photographer</Text>
              </View>
            </View>
            <View>
              <Pressable>
                <Image
                  source={require("@/assets/Image/icon/share-btn.png")}
                  contentFit="contain"
                  style={{ height: 62, width: 64 }}
                />
              </Pressable>
            </View>
          </View>
          {/* e-card */}
          <View>
            {
              <Image
                source={require("@/assets/Image/Card.png")}
                contentFit="contain"
                style={{ height: 220, width: 405 }}
              />
            }
          </View>

          {/* // BadgeCollection Section */}
          <View
            style={{
              flexDirection: "row",
              // paddingRight: 80,
              width: "100%",
              alignItems: "center",
              paddingLeft: 12,
            }}
          >
            {
              <Image
                source={require("@/assets/Image/icon/Badge-C.png")}
                contentFit="contain"
                style={{ height: 60, width: 57, marginRight: 12 }}
              />
            }
            <Text style={styles.sectionText}>Badge Collection</Text>
            <Pressable
              onPress={() => {
                navigation.replace("BadgeCollection");
              }}
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
            {
              <Image
                source={require("@/assets/Image/Badges/turtleMaster.png")}
                contentFit="contain"
                style={styles.badge}
              />
            }
            {
              <Image
                source={require("@/assets/Image/Badges/SharkSpotter.png")}
                contentFit="contain"
                style={styles.badge}
              />
            }
            {
              <Image
                source={require("@/assets/Image/Badges/nemo.png")}
                contentFit="contain"
                style={styles.badge}
              />
            }
            {
              <Image
                source={require("@/assets/Image/Badges/mantaBadge.png")}
                contentFit="contain"
                style={styles.badge}
              />
            }
          </ScrollView>

          {/* photoGallerySection */}
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 12,
              width: "100%",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            {
              <Image
                source={require("@/assets/Image/icon/photoGallery.png")}
                contentFit="contain"
                style={{ height: 60, width: 57, marginRight: 12 }}
              />
            }
            <Text style={styles.sectionText}>Photo Gallery </Text>
            <Pressable
              // onPress={() => {
              //   navigation.replace("BadgeCollection");
              // }}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={styles.seeAll}>See all</Text>
              <Image
                source={require("@/assets/Image/icon/seeAllArrow.png")}
                contentFit="contain"
                style={{ height: 24, width: 16 }}
              />
            </Pressable>
          </View>
          {/* photos */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 28,
            }}
          >
            {
              <Image
                source={require("@/assets/Image/p-01.png")}
                contentFit="contain"
                style={styles.photoSize}
              />
            }
            {
              <Image
                source={require("@/assets/Image/p-02.png")}
                contentFit="contain"
                style={styles.photoSize}
              />
            }
            {
              <Image
                source={require("@/assets/Image/p-03.png")}
                contentFit="contain"
                style={styles.photoSize}
              />
            }
            {
              <Image
                source={require("@/assets/Image/p-04.png")}
                contentFit="contain"
                style={styles.photoSize}
              />
            }
            {
              <Image
                source={require("@/assets/Image/p-05.png")}
                contentFit="contain"
                style={styles.photoSize}
              />
            }
          </ScrollView>
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
  },
  ScrollView: {
    backgroundColor: "#272dfd",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    height: "100%",
  },
  align: {
    // alignItems: "center",
    // justifyContent: "center",
  },
  name: {
    fontSize: 36,
    fontFamily: "idealista-bold",
    color: "#ede9de",
    marginRight: 20,
  },
  sectionText: {
    fontSize: 20,
    fontFamily: "idealista-bold",
    color: "#ede9de",
    marginRight: 48,
  },
  tag: {
    fontSize: 12,
    fontFamily: "idealista-bold",
    color: "#ede9de",
    // backgroundColor: "#0e1059",
    margin: 16,
    padding: 2,
    borderCurve: "circular",
  },
  photoSize: {
    height: 100,
    width: 100,
    marginRight: 36,
  },
  badge: {
    height: 160,
    width: 180,
    marginRight: 24,
  },
  seeAll: {
    color: "#B2AFA7",
    fontFamily: "idealista-SemiBold",
    fontSize: 14,
    marginRight: 4,
  },
  bgImg: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginBottom: 40,
  },
});

export default MeScreen;
