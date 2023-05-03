import React, { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import Form from './components/form';
import Task from './components/task';
import { styles } from './style';

function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  console.log(taskList);
  const handleDelete = (index) => {
    Alert.alert('Delete Task', 'Are you sure you want to delete task?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          const taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return (
              <Task
                key={index}
                title={item}
                number={index + 1}
                onDeleteTask={() => handleDelete(index)}
              />
            );
          })}
        </ScrollView>
      </View>
      <Form handleAddTask={handleAddTask} />
    </View>
  );
}

export default App;
