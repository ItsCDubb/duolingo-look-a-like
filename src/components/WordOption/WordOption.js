import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./styles";

const WordOption = ({ text, onPress, isSelected }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.root,
        { backgroundColor: isSelected ? "lightgrey" : "white" },
      ]}
    >
      <Text
        style={[styles.text, { color: isSelected ? "lightgrey" : "black" }]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default WordOption;
