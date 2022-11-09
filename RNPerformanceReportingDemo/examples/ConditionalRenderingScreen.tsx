/* eslint-disable react-native/no-inline-styles */
import {ReactNavigationPerformanceView} from '@shopify/react-native-performance-navigation';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationKeys} from '../constants';

import useSimulatedSlowOperation from './useSimulatedSlowOperation';

const Child0 = () => {
  return (
    <View style={{...styles.childContainer, backgroundColor: 'yellow'}}>
      <Text style={styles.text}>Rendering component 0</Text>
    </View>
  );
};

const Child1 = () => {
  return (
    <View style={{...styles.childContainer, backgroundColor: 'pink'}}>
      <Text style={styles.text}>Rendering component 1</Text>
    </View>
  );
};

const ConditionalRenderingScreen = () => {
  const [componentNumber, setComponentNumber] = useState<0 | 1>(0);

  const slowOperation = useSimulatedSlowOperation({
    delaySeconds: 3,
    result: 1 as const,
  });

  useEffect(() => {
    const operation = async () => {
      setComponentNumber(await slowOperation());
    };

    operation();
  }, [slowOperation]);

  const childView = componentNumber === 0 ? <Child0 /> : <Child1 />;

  return (
    <ReactNavigationPerformanceView
      screenName={NavigationKeys.CONDITIONAL_RENDERING_SCREEN}
      interactive
      renderPassName={
        componentNumber === 0 ? 'interactive_0' : 'interactive_1'
      }>
      {childView}
    </ReactNavigationPerformanceView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'black',
  },
  childContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConditionalRenderingScreen;
