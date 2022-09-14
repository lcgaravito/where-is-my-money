import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Greeting = () => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.name}>Hola, Luis</Text>
      </View>
      <Ionicons name="person-circle-outline" size={40} color="white" />
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
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 35,
  },
});

export default Greeting;
