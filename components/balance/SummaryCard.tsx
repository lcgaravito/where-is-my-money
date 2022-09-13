import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Card } from "../../utils";
import colors from "../../colors";

type SummaryCardProps = {
  title: string;
  value: string;
};

const SummaryCard = ({ title, value }: SummaryCardProps) => {
  return (
    <Card backgroundColor="white">
      <View style={styles.root}>
        <View style={styles.icon}>
          <Feather name="bar-chart-2" size={40} color={colors.primary} />
        </View>
        <View>
          <Text style={styles.title}> {title} </Text>
          <View style={{ flexDirection: "row-reverse" }}>
            <Text style={styles.value}>{value}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default SummaryCard;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  title: {
    fontSize: 16,
  },
  value: {
    fontSize: 40,
  },
});
