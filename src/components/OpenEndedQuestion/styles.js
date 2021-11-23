import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  question: {
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  mascot: {
    aspectRatio: 3 / 4,
    marginRight: 10,
    width: "30%",
  },
  sentenceContainer: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    alignSelf: "stretch",
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#ebebeb",
  },
});

export default styles;
