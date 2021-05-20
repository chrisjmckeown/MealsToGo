import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBh0N5Yi_nrUJSageOX5_7MFvYyVuLctCE',
  authDomain: 'mealtogo-bc9c4.firebaseapp.com',
  projectId: 'mealtogo-bc9c4',
  storageBucket: 'mealtogo-bc9c4.appspot.com',
  messagingSenderId: '412536177792',
  appId: '1:412536177792:web:108d8ba05a0ca45d06d265',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
