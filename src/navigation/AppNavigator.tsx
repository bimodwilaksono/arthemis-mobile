import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';
import { AppStackParamList } from '../types/navigation';

const AppStack = createStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="BottomNavigator" component={BottomNavigator} />
    </AppStack.Navigator>
  );
}