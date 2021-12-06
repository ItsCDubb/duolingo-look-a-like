import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  question: {
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
    height: 66,
  },
  text: {
    alignSelf: "flex-end",
    fontSize: 18,
  },
  blank: {
    width: 100,
    borderColor: "lightgrey",
    borderBottomWidth: 2,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
  },
});

export default styles;
