import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Transaction } from "../../App";
import config from "../../config";

type ListItemProps = {
  transaction: Transaction;
};

const ListItem = ({ transaction }: ListItemProps) => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.text}>{transaction.value}</Text>
        <Text style={styles.text}>{transaction.description}</Text>
        <Text style={styles.text}>{transaction.paid ? "paid" : "unpaid"}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  root: {
    padding: 5,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 10,
  },
  text: {
    color: config.colorPalette[5],
  },
});
