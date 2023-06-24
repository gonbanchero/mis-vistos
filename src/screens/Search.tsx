import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Search = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top}}>
      <Text>Search</Text>
    </View>
  );
};
