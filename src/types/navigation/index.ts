import { NavigatorScreenParams } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}

export type AppStackParamList = {
  BottomNavigator: NavigatorScreenParams<BottomNavigatorParamList>;
};

export type BottomNavigatorParamList = {
  Home: undefined;
};