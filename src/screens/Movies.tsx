import React from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSearch} from '../hooks/useSearch';
import {SearchResults} from '../components/SearchResults';

export const Movies = () => {
  const {top} = useSafeAreaInsets();
  const {searchState} = useSearch();

  return (
    <View
      style={{
        marginTop: top,
        backgroundColor: '#0A0A0A',
      }}>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
        placeholderTextColor={'#8D8C8E'}
      />
      <Text style={styles.title}>PELÍCULAS</Text>
      <FlatList
        data={searchState}
        renderItem={({item}: any) => <SearchResults results={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    fontSize: 16,
    color: '#8D8C8E',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 45,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#252326',
    borderRadius: 10,
    color: 'white',
  },
});
