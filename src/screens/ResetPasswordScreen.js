import React, { useState } from 'react';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { emailValidator } from '../helpers/emailValidator';
import { useAuth } from '../context/AuthContext';
import firebase from '../../firebaseConfig';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });

  const resetPassword = async () => {
    const emailError = emailValidator(email.value);
    if (emailError) setEmail({ ...email, error: emailError });

    try {
      await firebase.auth().sendPasswordResetEmail(email.value);
      alert('Password reset email sent');
      navigation.navigate('Login');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={resetPassword}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
      <Text onPress={() => navigation.navigate('Login')}>Back to Login</Text>
    </Background>
  );
}
