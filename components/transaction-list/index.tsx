import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Transaction } from "../../App";
import ListItem from "./ListItem";

type TransactionListProps = {
  data: Array<Transaction>;
  toggleTransactionFunction: (id: number) => void;
  removeTransactionFunction: (id: number) => void;
};
const TransactionList = ({
  data,
  toggleTransactionFunction,
  removeTransactionFunction,
}: TransactionListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          transaction={item}
          toggleTransactionFunction={toggleTransactionFunction}
          removeTransactionFunction={removeTransactionFunction}
        />
      )}
    />
  );
};

export default TransactionList;

const styles = StyleSheet.create({});
