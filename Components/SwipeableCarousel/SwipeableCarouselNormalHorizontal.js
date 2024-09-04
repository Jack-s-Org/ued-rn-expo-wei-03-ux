import * as React from "react";
import Carousel from "react-native-reanimated-carousel";

import Slide from "./Slide";
import {
  useWindowDimensions,
  Dimensions,
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Dots from "./Dots";

const window = Dimensions.get("window");
const PAGE_WIDTH = window.width;
const height = 450;

const data = [
  <View style={{ alignItems: "center" }}>
    <Image
      source={require("@/assets/Image/MainProfile/turtle.png")}
      contentFit="contain"
      style={{ height: 400, width: 400 }}
    />
    <Text style={styles.profileName}>Hawksbill Turtle</Text>
  </View>,
  <View style={{ alignItems: "center" }}>
    <Image
      source={require("@/assets/Image/MainProfile/manta.png")}
      contentFit="contain"
      style={{ height: 400, width: 400 }}
    />
  </View>,
  <View style={{ alignItems: "center" }}>
    <Image
      source={require("@/assets/Image/MainProfile/octopus.png")}
      contentFit="contain"
      style={{ height: 400, width: 400 }}
    />
  </View>,
  // <Slide index={1} backgroundColor="orange" />,
  // <Slide index={2} backgroundColor="yellow" />,
];

function SwipeableCarouselNormalHorizontal() {
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
const styles = StyleSheet.create({
  profileName: {
    fontFamily: "idealista-bold",
    fontSize: 40,
    color: "#d02462",
    backgroundColor: "#ede9de",
    transform: [{ rotate: "-4deg" }],
    padding: 10,
  },
});

export default SwipeableCarouselNormalHorizontal;
