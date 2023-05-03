import React, { useState } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';

export default function Form({ handleAddTask }) {
  const [text, setText] = useState('');

  const onPress = () => {
    if (!text) {
      alert('Vui long nhap cong viec');
      return false;
    }
    handleAddTask(text);
    setText('');
    Keyboard.dismiss();
  };
  return (
    <View style={styles.addTask}>
      <TextInput
        placeholder="Your task"
        style={styles.input}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TouchableOpacity onPress={onPress}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
