import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    alignItems: "center",
    padding: 10,
    height: "48%",
    width: "48%",
    borderColor: "lightgrey",
    borderRadius: 10,
    borderWidth: 2,
    borderBottomWidth: 4,
  },
  selectedContainer: {
    borderColor: "#81d5fe",
    backgroundColor: "#ddf4fe",
  },
  optionImage: {
    flex: 1,
    width: "100%",
  },
  optionText: {
    color: "#333",
    fontWeight: "bold",
  },
  slectedText: {
    color: "#40bef7",
    fontWeight: "bold",
  },
});

export default styles;
