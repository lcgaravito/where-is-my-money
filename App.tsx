import {} from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  AddTransaction,
  Balance,
  Greeting,
  TransactionList,
} from "./components";
import colors from "./colors";
import DeleteTransaction from "./components/delete-transaction";

export interface Transaction {
  id: number;
  value: number;
  paid: boolean;
  description: string;
}

export default function App() {
  const [transactionList, setTransactionList] = useState<Array<Transaction>>(
    []
  );
  const [transactionToDelete, setTransactionToDelete] = useState<
    Transaction | undefined
  >(undefined);
  const addTransaction = ({
    value,
    description,
  }: {
    value: number;
    description: string;
  }) => {
    setTransactionList((prev) => [
      ...prev,
      { id: Date.now(), value, paid: false, description },
    ]);
  };

  const removeTransaction = (id: number) => {
    setTransactionList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const toggleTransaction = (id: number) => {
    setTransactionList((prev) =>
      prev.map((transaction) =>
        transaction.id === id
          ? { ...transaction, paid: !transaction.paid }
          : transaction
      )
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#ffffff00", colors.secondary]}
        style={styles.background}
      />
      <Greeting />
      <Balance transactions={transactionList} />
      <AddTransaction addTransactionFunction={addTransaction} />
      {!transactionToDelete && (
        <TransactionList
          data={transactionList}
          toggleTransactionFunction={toggleTransaction}
          removeTransactionFunction={(id) =>
            setTransactionToDelete(transactionList.find((tra) => tra.id === id))
          }
        />
      )}
      <DeleteTransaction
        transaction={transactionToDelete}
        onRequestClose={() => setTransactionToDelete(undefined)}
        removeTransactionFunction={removeTransaction}
      />
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 50 : 10,
    backgroundColor: colors.primary,
    padding: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 500,
  },
});
