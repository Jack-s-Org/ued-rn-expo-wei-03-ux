import React from "react";
import { View, Image } from "react-native";

const Dots = ({ data, currentIndex }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 64,
        }}
      >
        {data.map((_, index) =>
          index === currentIndex ? (
            <Image
              source={require("@/assets/Image/icon/p-01.png")}
              style={{ height: 12, width: 24 }}
            ></Image>
          ) : (
            <Image
              source={require("@/assets/Image/icon/p-02.png")}
              style={{ height: 12, width: 12 }}
            ></Image>
          )
        )}
      </View>
    </View>
  );
};

export default Dots;
