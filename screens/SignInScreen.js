import {
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";

const image = require("@/assets/Image/bg-vector.png");
const SignInScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("email");
  const [number, onChangeNumber] = React.useState("");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImg}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          {/* email */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <View>
              <Image
                source={require("@/assets/Image/icon/email.png")}
                contentFit="contain"
                style={{ height: 61, width: 63, marginRight: 16 }}
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
          {/* password */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "flex-start",
            }}
          >
            <View>
              <Image
                source={require("@/assets/Image/icon/password.png")}
                contentFit="contain"
                style={{ height: 61, width: 63, marginRight: 16 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="password"
                  keyboardType="numeric"
                ></TextInput>
              </View>
              <View>
                <Image
                  source={require("@/assets/Image/icon/hide.png")}
                  contentFit="contain"
                  style={{ height: 40, width: 40 }}
                />
              </View>
            </View>
          </View>
        </View>
        {/* complete */}
        <View style={{ alignItems: "center" }}>
          <Pressable
            onPress={() => {
              navigation.replace("Main");
            }}
            style={{
              backgroundColor: "#d02462",
              borderRadius: 200,
              alignItems: "center",
              width: 240,
            }}
          >
            <Text style={styles.text}>Complete</Text>
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
    fontSize: 16,
    // backgroundColor: "#d02462",
    width: 120,
    padding: 16,
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
    borderBottomWidth: 2,
    borderColor: "#ede9de",
  },
});

export default SignInScreen;
