import { Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Linking from "expo-linking";

export const formatAttractionURL = (attraction) => {
  `https://en.wikipedia.org/wiki/${attraction.replace(/\s/g, "_")}`;
};

export function Attraction({ name }) {
  return (
    <TouchableOpacity
      style={styles.attractionContainer}
      onPress={() => Linking.openURL(formatAttractionURL(name))}
      key={name}
    >
      <Text style={styles.name}>{name}</Text>
      <Text stlye={styles.url}>{formatAttractionURL(name)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  attractionContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#FFF9F0",
    borderRadius: 8,
  },
  name: { fontSize: 18, color: "blue" },
  url: { color: "gray" },
});
