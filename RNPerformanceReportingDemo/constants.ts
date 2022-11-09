export const NavigationKeys = {
  EXAMPLES: 'Examples' as const,
  PERFORMANCE: 'Performance' as const,
  CONDITIONAL_RENDERING_SCREEN: 'ConditionalRenderingScreen' as const,
  DRAWER_NAVIGATOR: 'DrawerNavigator' as const,
  DRAWER_NAVIGATOR_SCREEN_1: 'DrawerNavigatorScreen1' as const,
  DRAWER_NAVIGATOR_SCREEN_2: 'DrawerNavigatorScreen2' as const,
  NESTED_NAVIGATION_SCREEN: 'NestedNavigationScreen' as const,
  NESTED_PROFILER_CONTEXT: 'NestedProfilerContext' as const,
  NESTED_CONTEXT_SCREEN: 'NestedContextScreen' as const,
  INNER_NESTED_CONTEXT_SCREEN: 'InnerNestedContextScreen' as const,
};

type ValueOf<T> = T[keyof T];

export type RootStackParamList = {
  [key in ValueOf<typeof NavigationKeys>]: undefined;
};
