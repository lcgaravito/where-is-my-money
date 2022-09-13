import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Transaction } from "../../App";
import { Card } from "../../utils";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../colors";
import { numberWithCommas } from "../../utils/functions";

type ListItemProps = {
  transaction: Transaction;
  toggleTransactionFunction: (id: number) => void;
  removeTransactionFunction: (id: number) => void;
};

const ListItem = ({
  transaction,
  toggleTransactionFunction,
  removeTransactionFunction,
}: ListItemProps) => {
  return (
    <Card backgroundColor="white">
      <View style={styles.root}>
        <View>
          <Text style={styles.textValue}>
            {"$ " + numberWithCommas(transaction.value)}
          </Text>
          <Text style={styles.textDescription}>{transaction.description}</Text>
          <Text style={styles.textDescription}>
            {new Date(transaction.id).toLocaleDateString("es-CO", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={() => removeTransactionFunction(transaction.id)}
          >
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.checkButton]}
            onPress={() => toggleTransactionFunction(transaction.id)}
          >
            {transaction.paid ? (
              <AntDesign name="checksquareo" size={24} color="black" />
            ) : (
              <Ionicons name="square-outline" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textValue: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: "bold",
  },
  textDescription: {
    color: colors.gray,
    fontSize: 14,
  },
  button: {
    marginLeft: 5,
    padding: 10,
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: colors.error,
  },
  checkButton: {
    backgroundColor: colors.primary,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
  },
});
