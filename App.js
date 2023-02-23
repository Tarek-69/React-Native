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
        <Text style={styles.baseText}>Mon texte est rouge</Text>
        <Text style={styles.baseText}>App.js</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre texte ici"
          />
          <Button title="Ajouter un item " onPress={() => sampleGoals} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "50%",
    margin: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    margin: 12,
  },
});
