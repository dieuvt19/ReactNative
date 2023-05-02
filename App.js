import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Form from './components/form';
import Task from './components/task';
import { styles } from './style';

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          <Task taskList={taskList} />
        </ScrollView>
      </View>
      <Form taskList={taskList} setTaskList={setTaskList} />
    </View>
  );
}

export default App;
