import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Modal, TextInput } from "react-native";

const Todo = ({ todo, index, deleteTodo, updateTodo }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleDelete = () => {
    deleteTodo(index);
    setModalVisible(false);
  };

  const handleUpdate = () => {
    updateTodo(index, updatedTodo);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo}</Text>
      <Button title="Modifier la tâche" onPress={() => setModalVisible(true)} />
      <Button title="Supprimer la tâche" onPress={handleDelete} />
      <Modal
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Modifier la tâche :</Text>
            <TextInput
              style={styles.modalInput}
              value={updatedTodo}
              onChangeText={(text) => setUpdatedTodo(text)}
            />
            <View style={styles.modalButtonsContainer}>
              <Button
                style={styles.modalButton}
                title="Annuler"
                onPress={() => setModalVisible(false)}
              />
              <Button
                style={styles.modalButton}
                title="Enregistrer"
                onPress={handleUpdate}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 6,
  },
  text: {
    flex: 1,
    fontSize: 18,
    marginVertical: 10,
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContent: {
    backgroundColor: "rgba(73, 0, 72, 0.82)",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginBottom: 15,
    color: "white",
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
  },
});

export default Todo;
