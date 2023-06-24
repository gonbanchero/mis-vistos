import React, {useEffect, useState} from 'react';
import {SearchInterface, SearchResult} from '../interfaces/searchInterface';
import movieDB from '../api/MovieDB';

interface SearchState {
  searchResults: SearchResult[];
}
export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchState, setSearchState] = useState<SearchState>();
  console.log(searchState);

  const getResults = async () => {
    const searchResults = movieDB.get<SearchInterface>('/movie', {
      params: {query: 'pepito'},
    });

    const response = await searchResults;

    // const response = await Promise.all(searchResults);
    // console.log(response[0].data.results);

    setSearchState(response.data.results);
  };

  useEffect(() => {
    getResults();
  }, []);

  return {searchState, isLoading};
};
