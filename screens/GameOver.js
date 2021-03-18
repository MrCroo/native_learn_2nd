import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import MainButton from "../components/MainButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onRestart,
}) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require("../assets/success.png")}
        />
      </View>
      <View style={styles.resultContainer}>
        <Text>
          Number of Rounds: <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          , Number was: <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
      </View>
      <MainButton onPress={onRestart}>NEW GAME</MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  highlight: {
    color: "#79d279",
  },
});
