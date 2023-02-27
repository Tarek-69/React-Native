import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";

const Todo = ({ todo, index, deleteTodo }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = () => {
    deleteTodo(index);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo}</Text>
      <Button
        title="Supprimer la tâche"
        onPress={() => setModalVisible(true)}
      />
      <Modal
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Confirmer la suppression ?</Text>
            <View style={styles.modalButtonsContainer}>
              <Button
                style={styles.modalButton}
                title="Annuler"
                onPress={() => setModalVisible(false)}
              />
              <Button
                style={styles.modalButton}
                title="Supprimer"
                onPress={handleDelete}
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
