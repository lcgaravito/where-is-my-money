import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Transaction } from "../../App";
import config from "../../config";

type AddTransactionProps = {
  addTransactionFunction: (transaction: Transaction) => void;
};

const AddTransaction = ({ addTransactionFunction }: AddTransactionProps) => {
  const [value, setValue] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  return (
    <View>
      <Text>¿Quieres agregar una transacción?</Text>
      <TextInput
        style={styles.textInput}
        value={value + ""}
        onChangeText={(value) => setValue(Number.parseInt(value))}
        keyboardType="numeric"
        placeholder="$ Valor"
      />
      <TextInput
        style={styles.textInput}
        value={description}
        onChangeText={setDescription}
        placeholder="Descripción"
      />
      <Button
        color={config.colorPalette[5]}
        onPress={() => addTransactionFunction({ value, description })}
        title="Agregar Transacción"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textInput: {
    borderBottomColor: "#4A306D",
    borderBottomWidth: 1,
  },
});

export default AddTransaction;
