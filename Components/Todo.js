import { View, Text, Button, StyleSheet } from "react-native";

function Todo(props) {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItem}>{props.todo}</Text>
      <Button
        title="Supprimer la tâche"
        onPress={() => props.deleteTodo(props.index)}
      />
    </View>
  );
}

export default Todo;

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
});
