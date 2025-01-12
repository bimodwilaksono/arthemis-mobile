import { createNavigationContainerRef } from '@react-navigation/native';
import { AppStackParamList } from '../types/navigation';

export const navigationRef = createNavigationContainerRef();

export function navigate<RouteName extends keyof AppStackParamList>(name: RouteName, params: AppStackParamList[RouteName]) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function getCurrentRoute() {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute();
  }

  return undefined;
}