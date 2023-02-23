import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [text, onChangeText] = useState("");
  const [goals, setGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  const handleAddGoal = () => {
    setGoals([...goals, text]);
    onChangeText("");
  };

  const handleDeleteGoal = (index) => {
    const newGoals = [...goals];
    newGoals.splice(index, 1);
    setGoals(newGoals);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.baseText}>Todo liste en react native</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre tâche à réaliser"
            value={text}
            onChangeText={onChangeText}
          />

          <Button title="Ajouter une tâche" onPress={handleAddGoal} />
        </View>

        <FlatList
          data={goals.map((goal, index) => ({ goal, index }))}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem}>{item.goal}</Text>
              <Button
                title="Supprimer la tâche"
                onPress={() => handleDeleteGoal(item.index)}
              />
            </View>
          )}
          keyExtractor={(item) => item.index.toString()}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  baseText: {
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    margin: 23,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "60%",
    marginRight: 3,
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 2,
  },
  listItem: {
    marginLeft: 0,
    fontSize: 18,
    marginVertical: 10,
    flex: 1,
    marginRight: 10,
  },
});
