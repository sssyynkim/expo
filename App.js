import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";

import { useState } from "react";
import { Attraction } from "./components/Attraction";

import data from "./attractions.json";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [input, setInput] = useState("");
  const [attractions, setAttractions] = useState([]);

  const handleSubmit = (event) => {
    const text = event.nativeEvent.text;

    if (text === "") {
      setAttractions([]);
      return;
    }

    let results = data.filter(({ city }) =>
      city.toLowerCase().includes(text.toLowerCase())
    );

    results = results.map((item) => item.attractions).flat();
    console.log(results);
    setAttractions(results);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter a city name..."
          returnKeyType="search"
          value={input}
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={(event) => handleSubmit(event)}
          style={styles.searchBar}
        />
        {/*<FlatList
          data={attractions}
          renderItem={({ item }) => <Attraction name={item} />}
          keyExtractor={(item) => item}
  />*/}
        {attractions.map((item) => (
          <Attraction name={item} key={item} />
        ))}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    width: "90%",
  },
  searchBar: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
    marginTop: 50,
  },
  list: {
    marginTop: 10,
    flexGrow: 0,
    width: "100%",
  },
});
