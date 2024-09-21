import {
  Image,
  ImageBackground,
  Pressable,
  View,
  StyleSheet,
  Text,
} from "react-native";
const image = require("@/assets/Image/bg-vector.png");
const Login = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#272dfd",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            source={require("@/assets/Logo.png")}
            resizeMode="cover"
            style={{
              width: 240,
              height: 240,
              marginBottom: 40,
              marginTop: 160,
            }}
          />
          <Pressable
            onPress={() => {
              navigation.replace("SignIn");
            }}
            style={styles.LogBtn}
          >
            <Text style={styles.Login}>Log in</Text>
          </Pressable>
          <Text style={styles.or}>or</Text>
          <Pressable style={styles.SignBtn}>
            <Text style={styles.Sign}>Sign up</Text>
          </Pressable>
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 4 }}
          >
            <View
              style={{ width: 100, height: 4, backgroundColor: "#8e8c85" }}
            ></View>
            <Text
              style={{
                fontFamily: "idealista-bold",
                color: "#8e8c85",
                fontSize: 14,
                margin: 8,
              }}
            >
              {" "}
              Sign up with
            </Text>
            <View
              style={{ width: 100, height: 4, backgroundColor: "#8e8c85" }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 196,
              justifyContent: "space-around",
            }}
          >
            <Image
              source={require("@/assets/Image/icon/Apple.png")}
              style={{ width: 48, height: 48 }}
            />
            <Image
              source={require("@/assets/Image/icon/twitter.png")}
              style={{ width: 34, height: 28 }}
            />
            <Image
              source={require("@/assets/Image/icon/google.png")}
              style={{ width: 30, height: 30 }}
            />
            <Image
              source={require("@/assets/Image/icon/facebook.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  Login: {
    fontFamily: "idealista-bold",
    color: "#272dfd",
    fontSize: 16,
  },
  LogBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ede9de",
    width: 300,
    height: 40,
    borderRadius: 40,
    marginBottom: 8,
  },
  or: {
    fontFamily: "idealista-bold",
    color: "#ede9de",
    fontSize: 12,
    marginBottom: 8,
  },
  Sign: {
    fontFamily: "idealista-bold",
    color: "#ede9de",
    fontSize: 16,
  },
  SignBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d02462",
    width: 300,
    height: 40,
    borderRadius: 40,
    marginBottom: 20,
  },
});
export default Login;
