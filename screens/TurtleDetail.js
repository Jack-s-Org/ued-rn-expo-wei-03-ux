import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TurtleDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
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
          <Text style={styles.text01}>Hawksbill Turtle</Text>
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
  ScrollView: {
    backgroundColor: "#272dfd",
    display: "flex",
    flex: 1,
    height: "100%",
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
  text01: {
    fontFamily: "idealista-bold",
    fontSize: 36,
    color: "#ede9de",
  },
});

export default TurtleDetail;
