import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export default function Form({ taskList, setTaskList }) {
  const [text, setText] = useState('');

  const onPress = () => {
    if (!text) {
      alert('Vui long nhap cong viec');
      return false;
    }
    setTaskList([...taskList, text]);
    setText('');
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
