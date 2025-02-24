import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Octicons } from '@expo/vector-icons';

export default function TextInput({ errorText, type, description, ...props }) {
  const [icon, setIcon] = useState();
  const [placeholder, setplaceholder] = useState();

  useEffect(() => {
    if (type === 'password') {
      setIcon('lock');
      setplaceholder('Password');
    } else if (type === 'email') {
      setIcon('mail');
      setplaceholder('Email');
    } else {
      setIcon('');
    }
  }, [type]);
  return (
    <View
      className="item-center flex-row gap-4 rounded-2xl rounded-lg bg-neutral-100 px-4  "
      style={{ height: hp(7) }}>
      <Octicons name={icon} size={hp(2.7)} color="gray" />
      <TextInput style={{ fontSize: hp(2.5) }} className="flex-1 font-semibold text-neutral-700" />
    </View>
  );
}
