import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Transaction } from "../../App";
import colors from "../../colors";
import { AntDesign } from "@expo/vector-icons";
import { numberWithCommas } from "../../utils/functions";

type DeleteTransactionProps = {
  transaction?: Transaction;
  onRequestClose: () => void;
  removeTransactionFunction: (id: number) => void;
};

const DeleteTransaction = ({
  transaction,
  onRequestClose,
  removeTransactionFunction,
}: DeleteTransactionProps) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={!!transaction}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        onRequestClose();
      }}
    >
      {transaction && (
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              ¿Quieres borrar la transacción?
            </Text>
            <Text style={styles.textValue}>
              {"$ " + numberWithCommas(transaction.value)}
            </Text>
            <Text style={styles.textDescription}>
              {transaction.description}
            </Text>
            <Text style={styles.textDescription}>
              {new Date(transaction.id).toLocaleDateString("es-CO", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  onRequestClose();
                }}
              >
                <Text style={styles.textStyle}>No Borrar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonDelete]}
                onPress={() => {
                  removeTransactionFunction(transaction.id);
                  onRequestClose();
                }}
              >
                <Text style={styles.textStyle}>Borrar</Text>
                <AntDesign name="delete" size={24} color={colors.gray} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Modal>
  );
};

export default DeleteTransaction;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch",
    marginBottom: 10,
  },
  modalView: {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    flex: 0.5,
    elevation: 2,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonClose: {
    backgroundColor: colors.primary,
  },
  buttonDelete: {
    backgroundColor: colors.error,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    textAlign: "center",
  },
  textValue: {
    color: colors.gray,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textDescription: {
    color: colors.gray,
    fontSize: 16,
    textAlign: "center",
  },
});
