import React, { useState, createContext, useEffect, useMemo } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('san francisco');

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword.length) {
      return;
    }
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((results) => {
        setIsLoading(false);
        setLocation(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{ location, isLoading, error, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
