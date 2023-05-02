import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export default function Task({ taskList }) {
  console.log(taskList);
  return (
    <View>
      {taskList?.map((task, index) => {
        console.log(task);
        return (
          <TouchableOpacity key={index}>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>
                  {index < 10 ? `0${index + 1}` : `${index + 1}`}
                </Text>
              </View>
              <View style={styles.content}>
                <Text>{task}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
