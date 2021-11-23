import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
    borderColor: "#57a600",
    borderBottomWidth: 5,
    backgroundColor: "#58cc02",
  },
  disabledContainer: {
    borderColor: "grey",
    backgroundColor: "lightgrey",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "white",
    borderBottomWidth: 1.5,
  },
});

export default styles;
