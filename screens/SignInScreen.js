import {
  Text,
  Button,
  StyleSheet,
  Pressable,
  ImageBackground,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// const [text, onChangeText] = React.useState("email");
const image = require("@/assets/Image/bg-vector.png");
const SignInScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("email");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImg}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={require("@/assets/Image/icon/email.png")}
                contentFit="contain"
                style={{ height: 61, width: 63 }}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              ></TextInput>
            </View>
          </View>
        </View>
        <View>
          <Pressable
            onPress={() => {
              navigation.replace("Main");
            }}
          >
            <Text style={styles.text}>Sign In</Text>
          </Pressable>
        </View>
      </ImageBackground>
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
  text: {
    fontFamily: "idealista-bold",
    color: "#ede9de",
  },
  bgImg: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    fontFamily: "idealista-bold",
    fontSize: 20,
    color: "#ede9de",
  },
});

export default SignInScreen;
