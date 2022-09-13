import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Greeting = () => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.label}>Hola</Text>
        <Text style={styles.name}>Luis</Text>
      </View>
      <Ionicons name="person-circle-outline" size={50} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
  },
});

export default Greeting;
