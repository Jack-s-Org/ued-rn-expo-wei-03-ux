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
const HomeScreen = () => {
  return (
    <ScrollView
      style={styles.ScrollView}
      contentContainerStyle={styles.container}
    >
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImg}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 14,
            marginBottom: 28,
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
        {/* // Popular location */}
        {/* <View
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
        </View> */}
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
    marginTop: 68,
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
});

export default HomeScreen;
