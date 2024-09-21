import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    // The view below is the container of your tab bar.
    // This is the place where you should assign stylings such as border radius and border color
    <View style={styles.tabBar}>
      {/* below is a loop on each of your Tab.Screen in MainScreen.js file */}
      {state.routes.map((route, index) => {
        const descriptor = descriptors[route.key];
        const { options } = descriptor;

        const isFocused = state.index === index;
        const color = isFocused
          ? options.tabBarActiveTintColor
          : options.tabBarInactiveTintColor;

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const labelText = label instanceof Function ? label() : label;

        const icon = options.tabBarIcon({ focused: isFocused, color });

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        // Below is the component to render for each of the item in the tab bar e.g. icon and label
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            {/* You should edit your UI for the item starting from here. Keep the TouchableOpacity the same */}
            {icon}
            {labelText && (
              <Text style={{ color: isFocused ? "#fff" : "#a0a0a0" }}>
                {labelText}
              </Text>
            )}
            {/* <Image
              source={require("@/assets/Image/icon/TabTouchable.png")}
              style={{ width: 62, height: 60 }}
            ></Image> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 2,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "#dadada",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    // margin: 16,
    padding: 24,
    marginTop: 20,
    backgroundColor: "#ede9de",
  },
  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomTabBar;
