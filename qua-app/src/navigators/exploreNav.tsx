import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../screens/explore/main";
import ExploreMoreScreen from "@/src/screens/explore/more";
const ExploreStack = createStackNavigator();

export default function ExploreNavigator() {
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen
        name="ExploreMoreScreen"
        component={ExploreMoreScreen}
      />
    </ExploreStack.Navigator>
  );
}
