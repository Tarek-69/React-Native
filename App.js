import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TextInputComponent,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [text, onChangeText] = React.useState("Text");
  const [number, onChangeNumber] = React.useState("Number");

  const sampleGoals = [
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
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.baseText}>App.js</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre texte ici"
          />

          <Button title="Ajouter un item " onPress={() => sampleGoals} />
        </View>

        <FlatList
          data={[
            { key: "Faire les courses" },
            { key: "Aller à la salle de sport 3 fois par semaine" },
            { key: "Monter à plus de 5000m d altitude" },
            { key: "Acheter mon premier appartement" },
            { key: "Perdre 5 kgs" },
            { key: "Gagner en productivité" },
            { key: "Apprendre un nouveau langage" },
            { key: "Faire une mission en freelance" },
            { key: "Organiser un meetup autour de la tech" },
            { key: "Faire un triathlon" },
          ]}
          renderItem={({ item }) => <Text style={styles.list}>{item.key}</Text>}
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
    width: "50%",
    marginRight: 0,
  },

  list: {
    marginLeft: 0,
    fontSize: 12,
    marginVertical: 10,
  },
});
