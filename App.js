import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import CategoryListItem from "./components/CategoryListItem";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: "Dụng cụ trượt tuyết" },
        { id: 2, name: "Quần áo trượt tuyết" },
        { id: 3, name: "Kính mũ" },
      ],
    };
  }
  render() {
    const { categories } = this.state;
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryListItem category={item} />}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
        />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
