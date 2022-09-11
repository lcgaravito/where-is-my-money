import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Greeting = () => {
  return (
    <View>
      <Text style={styles.label}>Hola</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Greeting;
