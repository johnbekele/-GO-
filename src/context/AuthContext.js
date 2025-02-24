import React, { createContext, useContext, useState, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as SecureStore from 'expo-secure-store';
import firebase from '../../firebaseConfig'; // Ensure Firebase is properly configured
import { ANDROID_CLIENT_ID, EXPO_CLIENT_ID } from '@env';
import { makeRedirectUri } from 'expo-auth-session';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(false);
    }, 4000);
  }, []);

  // Google Auth Using Google Cloud Authentication
  WebBrowser.maybeCompleteAuthSession();
  const [request, response, promptAsync] = Google.useAuthRequest({
    redirectUri: makeRedirectUri({
      scheme: 'temarigo', // Match this with your app.json scheme
    }),
    androidClientId:
      '121347914242-c4hc038jnpm5nt5ttdvpdf3por86bj7m.apps.googleusercontent.com',
    expoClientId:
      '121347914242-uosij8knuhv2g72mssije7j6hrrqonjr.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      setUser(authentication);
      SecureStore.setItemAsync('userToken', authentication.accessToken);

      // Link Google account to Firebase
      const credential = firebase.auth.GoogleAuthProvider.credential(
        authentication.idToken,
        authentication.accessToken
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((userCredential) => {
          setUser(userCredential.user);
          SecureStore.setItemAsync('userToken', userCredential.user.uid);
        })
        .catch((error) => {
          console.error(error);
          alert('Error linking Google account to Firebase');
        });
    }
  }, [response]);

  // Email/Password Authentication with Firebase
  const loginWithEmail = async (email, password) => {
    if (email.value === '' || password.value === '') {
      setUser(email, password);
    }
  };

  const registerWithEmail = async (email, password) => {
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      setUser(userCredential.user);
      SecureStore.setItemAsync('userToken', userCredential.user.uid);
    } catch (error) {
      alert(error.message);
    }
  };

  // Logout
  const logout = async () => {
    setUser(null);
    await SecureStore.deleteItemAsync('userToken');
    await firebase.auth().signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        promptAsync,
        loginWithEmail,
        registerWithEmail,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return value;
};
