import { useState } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Octicons from "@expo/vector-icons/Octicons";
import MeScreen from "./MeScreen";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import CustomTabBar from "@/Components/CustomTabBar";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  // const [unreadCount, setUnreadCount] = useState(3);
  return (
    <AppDrawer navigation={navigation}>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#272dfd",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" size={28} color={color} />
            ),
            tabBarLabel: () => null,
          }}
        />

        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={28} color={color} />
            ),
            tabBarLabel: () => null,
          }}
        />

        <Tab.Screen
          name="AddTab"
          component={Empty} // this is a workaround to show a full screen when this tab is pressed
          options={{
            tabBarIcon: ({ color }) => (
              <Octicons name="people" size={28} color={color} />
            ),
            tabBarLabel: () => null,
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault(); // stop default navigation
              navigation.navigate("Add"); // manually navigate to the stack screen outside of the tab navigators
            },
          }}
        />

        <Tab.Screen
          name="Inbox"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="map-search-outline"
                size={28}
                color={color}
              />
            ),
            tabBarLabel: () => null,
            // tabBarBadge: unreadCount,
          }}
          // listeners={{
          //   tabPress: () => {
          //     setUnreadCount(null);
          //   },
          // }}
        />

        <Tab.Screen
          name="SettingsDrawer"
          component={MeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" size={28} color={color} />
            ),
            tabBarLabel: () => null,
          }}
        />
      </Tab.Navigator>
    </AppDrawer>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Add"
        component={AddScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
