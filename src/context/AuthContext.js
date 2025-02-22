import React, { createContext, useContext, useState, useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as SecureStore from 'expo-secure-store';
import firebase from '../../firebaseConfig'; // Import Firebase setup

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Google Auth
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: 'YOUR_GOOGLE_CLIENT_ID',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      setUser(authentication);
      SecureStore.setItemAsync('userToken', authentication.accessToken);
    }
  }, [response]);

  // Email/Password Authentication with Firebase
  const loginWithEmail = async (email, password) => {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setUser(userCredential.user);
      SecureStore.setItemAsync('userToken', userCredential.user.uid);
    } catch (error) {
      alert(error.message);
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
  };

  return (
    <AuthContext.Provider
      value={{ user, promptAsync, loginWithEmail, registerWithEmail, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
