import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import BadgeCollection from "./BadgeCollection";
import MeScreen from "./MeScreen";
import Gallery from "./Gallery";
import TurtleBadge from "./TurtleBadge";
import AquaticPlant from "./AquaticPlant";
import DiscoverScreen from "./DiscoverScreen";
import Landscape from "./Landscape";
import TurtleDetail from "./TurtleDetail";
import LogoAnimation from "./LogoAnimation";
import OnboardingScreen from "./OnboardingScreen";
import Login from "./Login";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogoAnimation" component={LogoAnimation} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen name="BadgeCollection" component={BadgeCollection} />
        <Stack.Screen name="MeScreen" component={MeScreen} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="TurtleBadge" component={TurtleBadge} />
        <Stack.Screen name="AquaticPlant" component={AquaticPlant} />
        <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
        <Stack.Screen name="Landscape" component={Landscape} />
        <Stack.Screen name="TurtleDetail" component={TurtleDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
