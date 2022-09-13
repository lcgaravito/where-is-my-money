import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import colors from "../../colors";
import { Card } from "../../utils";

type AddTransactionProps = {
  addTransactionFunction: (transaction: {
    value: number;
    description: string;
  }) => void;
};

const AddTransaction = ({ addTransactionFunction }: AddTransactionProps) => {
  const [value, setValue] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const handlerInputNumber = (newValue: string) => {
    setValue(newValue.replace(/[^0-9]/g, ""));
  };
  const onSubmit = () => {
    if (value && description) {
      addTransactionFunction({
        value: Number.parseInt(value),
        description,
      });
      setDescription("");
      setValue("");
    }
  };
  return (
    <Card backgroundColor="white">
      <View style={styles.container}>
        <Text style={styles.question}>¿Quieres agregar una transacción?</Text>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={handlerInputNumber}
          keyboardType="numeric"
          placeholder="$ Valor"
        />
        <TextInput
          style={styles.textInput}
          value={description}
          onChangeText={setDescription}
          placeholder="Descripción"
          returnKeyType="done"
          onSubmitEditing={onSubmit}
          clearButtonMode="while-editing"
        />
        <Button
          color={colors.primary}
          disabled={!value || !description}
          onPress={() => {
            addTransactionFunction({
              value: Number.parseInt(value),
              description,
            });
            setDescription("");
            setValue("");
          }}
          title="Agregar Transacción"
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {},
  question: {
    fontSize: 16,
  },
  textInput: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    backgroundColor: "#F2F2F2",
    padding: 16,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    marginVertical: 10,
    paddingVertical: 5,
    fontSize: 20,
  },
});

export default AddTransaction;
