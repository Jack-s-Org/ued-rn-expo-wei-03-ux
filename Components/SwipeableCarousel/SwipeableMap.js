import * as React from "react";
import Carousel from "react-native-reanimated-carousel";

// import Slide from "./Slide";
import {
  useWindowDimensions,
  Dimensions,
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Dots from "./Dots";

const window = Dimensions.get("window");
const PAGE_WIDTH = window.width;
const height = 640;
const styles = StyleSheet.create({
  text01: {
    fontFamily: "idealista-bold",
    fontSize: 40,
    color: "#d02462",
    backgroundColor: "#ede9de",
    transform: [{ rotate: "-4deg" }],
    padding: 10,
  },
  text02: {
    fontFamily: "idealista-bold",
    fontSize: 40,
    color: "#ede9de",
    backgroundColor: "#d02462",
    padding: 10,
  },
});

const data = [
  <View style={{ alignItems: "center" }}>
    <Pressable>
      <Image
        source={require("@/assets/Image/Map/tioman.png")}
        contentFit="contain"
        style={{ height: 480, width: 360 }}
      />
    </Pressable>

    <Text style={styles.text01}>Juara Beach</Text>
    <Text style={styles.text02}>Tioman Island</Text>
  </View>,
  <View style={{ alignItems: "center" }}>
    <Image
      source={require("@/assets/Image/Map/Perhentian.png")}
      contentFit="contain"
      style={{ height: 510, width: 380 }}
    />
    <Text style={styles.text01}>Perhentian Island</Text>
    <Text style={styles.text02}>Terengganu</Text>
  </View>,
  <View style={{ alignItems: "center" }}>
    <Image
      source={require("@/assets/Image/Map/Sipadan.png")}
      contentFit="contain"
      style={{ height: 462, width: 389 }}
    />
    <Text style={styles.text01}>Sipadan Island</Text>
    <Text style={styles.text02}>Sabah</Text>
  </View>,
];

function SwipeableMap() {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue(0);

  const [index, setIndex] = React.useState(0);

  const isVertical = false;

  const baseOptions = isVertical
    ? {
        vertical: true,
        width: windowWidth,
        height,
      }
    : {
        vertical: false,
        width: windowWidth,
        height,
      };

  return (
    <View>
      <View style={{ height }}>
        <Carousel
          {...baseOptions}
          style={{
            width: "100%",
          }}
          loop={false}
          defaultScrollOffsetValue={scrollOffsetValue}
          // autoPlay={true}
          // autoPlayInterval={2000}
          data={data}
          onSnapToItem={(index) => setIndex(index)}
          renderItem={({ index }) => data[index]}
        />
      </View>

      <View style={{ marginTop: 16 }}>
        <Dots data={data} currentIndex={index} />
      </View>
    </View>
  );
}

export default SwipeableMap;
