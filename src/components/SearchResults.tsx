import React from 'react';
import {SearchResult} from '../interfaces/searchInterface';
import {View, Image, StyleSheet, Text} from 'react-native';

interface Props {
  results: SearchResult;
}

export const SearchResults = ({results: item}: Props) => {
  console.log(item);
  return (
    <View style={styles.mainContainer}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.poster}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {item.title}
          <Text style={styles.originalTitle}> / {item.original_title}</Text>
        </Text>

        <Text style={styles.year}>{item.release_date.slice(0, 4)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#0F0F0F',
    borderBottomWidth: 1,
    borderBottomColor: '#151515',
    paddingVertical: 20,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 20,
    gap: 25,
  },
  imageContainer: {
    paddingLeft: 10,
  },
  poster: {
    width: 60,
    height: 80,
  },
  textContainer: {
    flex: 1,

    paddingRight: 10,
    gap: 10,
  },
  title: {
    color: 'white',
    fontSize: 19,
  },
  originalTitle: {
    fontSize: 16,
    color: '#8D8C8E',
  },
  year: {
    fontSize: 15,
    color: 'white',
  },
});
