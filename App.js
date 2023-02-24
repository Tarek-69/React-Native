import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import Todo from "./Components/Todo";

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
    onChangeText("Cliquez ici pour continuer");
  };

  const handleDeleteGoal = (index) => {
    const newGoals = [...goals];
    newGoals.splice(index, 1);
    setGoals(newGoals);
  };

  return (
    <ImageBackground
      style={styles.imgBackground}
      resizeMode="cover"
      source={require("./src/Images/wallpaper.jpeg")}
    >
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
            data={goals}
            renderItem={({ item, index }) => (
              <Todo
                todo={item}
                index={index}
                deleteTodo={(index) => handleDeleteGoal(index)}
              />
            )}
          />
        </SafeAreaView>
      </View>
    </ImageBackground>
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

    color: "#1a0aa3",
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

  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});
