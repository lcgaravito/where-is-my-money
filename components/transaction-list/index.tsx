import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Transaction } from "../../App";
import ListItem from "./ListItem";

type TransactionListProps = {
  data: Array<Transaction>;
};
const TransactionList = ({ data }: TransactionListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => <ListItem transaction={item} />}
    />
  );
};

export default TransactionList;

const styles = StyleSheet.create({});
