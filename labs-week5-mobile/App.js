import Lab3a from './components/Lab3a';
import Lab3b from './components/Lab3b';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Lab3a} />
        <Stack.Screen name="ChonMau" component={Lab3b} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}