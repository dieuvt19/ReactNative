import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import SkiiImage from "../assets/skii128.png";

export default function CategoryListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CategoryListItem</Text>
      <Image style={styles.categogyImage} source={SkiiImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16,
  },
  categogyImage: {
    width: 64,
    height: 64,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
});
