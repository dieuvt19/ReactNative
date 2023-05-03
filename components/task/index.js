import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export default function Task({ title, number, onDeleteTask }) {
  const itemBg = number % 2 === 0 ? styles.even : styles.odd;

  return (
    <TouchableOpacity onPress={onDeleteTask}>
      <View style={styles.item}>
        <View style={[styles.square, itemBg]}>
          <Text style={styles.number}>
            {number < 10 ? `0${number}` : `${number}`}
          </Text>
        </View>
        <View style={styles.content}>
          <Text>{title}</Text>
        </View>
      </View>
      {/* <Text onPress={handleDelete(index)}>xoa</Text> */}
    </TouchableOpacity>
  );
}
