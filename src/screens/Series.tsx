import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Series = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top}}>
      <Text>Series</Text>
    </View>
  );
};
