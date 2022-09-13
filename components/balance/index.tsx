import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Transaction } from "../../App";
import { Card } from "../../utils";
import SummaryCard from "./SummaryCard";
import { numberWithCommas } from "../../utils/functions";

type BalanceProps = {
  transactions: Transaction[];
};

const Balance = ({ transactions }: BalanceProps) => {
  const [pagado, setPagado] = useState<number>(0);
  const [gastado, setGastado] = useState<number>(0);
  useEffect(() => {
    setPagado(
      transactions
        .filter((transaction) => transaction.paid)
        .reduce((acc, transaction) => {
          return acc + transaction.value;
        }, 0)
    );
    setGastado(
      transactions.reduce((acc, transaction) => {
        return acc + transaction.value;
      }, 0)
    );
  }, [transactions]);

  return (
    <View style={styles.root}>
      <ScrollView horizontal style={styles.scrollView}>
        <SummaryCard
          title="% Pagado:"
          value={"% " + Math.round(gastado ? (pagado / gastado) * 100 : 0)}
        />
        <SummaryCard
          title="Has gastado:"
          value={"$ " + numberWithCommas(gastado)}
        />
        <SummaryCard
          title="Has pagado:"
          value={"$ " + numberWithCommas(pagado)}
        />
      </ScrollView>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  root: {
    height: 120,
  },
  scrollView: {},
});
