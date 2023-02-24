import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";

function Todo(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = () => {
    props.deleteTodo(props.index);
    setModalVisible(false);
  };

  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItem}>{props.todo}</Text>
      <Button
        title="Supprimer la tâche"
        onPress={() => setModalVisible(true)}
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Supprimer la tâche ?</Text>
            <View style={{ flexDirection: "row" }}>
              <Button
                style={{ ...styles.button, ...styles.buttonClose }}
                title="Annuler"
                onPress={() => setModalVisible(false)}
              />
              <Button
                style={{ ...styles.button, ...styles.buttonOpen }}
                title="Confirmer"
                onPress={handleDelete}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 6,
  },
  listItem: {
    marginLeft: 0,
    fontSize: 18,
    marginVertical: 10,
    flex: 1,
    marginRight: 10,
    color: "#7c1373",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgba(22, 4, 115, 0.8)",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Todo;
