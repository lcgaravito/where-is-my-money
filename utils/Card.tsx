import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  backgroundColor: string;
}

const Card = ({ children, backgroundColor }: CardProps) => {
  return (
    <View style={[styles.root, { backgroundColor: backgroundColor }]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  root: {
    padding: 20,
    margin: 5,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 10,
  },
});
