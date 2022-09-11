import {} from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { AddTransaction, Greeting, TransactionList } from "./components";

import config from "./config";

export interface Transaction {
  value: number;
  paid: boolean;
  description: string;
}

export default function App() {
  const [transactionList, setTransactionList] = useState<Array<Transaction>>(
    []
  );
  return (
    <View style={styles.container}>
      <Greeting />
      <AddTransaction
        addTransactionFunction={(transaction) => {
          setTransactionList((prev) => [...prev, transaction]);
        }}
      />
      <TransactionList data={transactionList} />
      <StatusBar
        barStyle="dark-content"
        backgroundColor={config.colorPalette[2]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.colorPalette[2],
    padding: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
