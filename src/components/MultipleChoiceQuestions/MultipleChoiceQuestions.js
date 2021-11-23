import React from "react";
import { Image, Pressable, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const MultipleChoiceQuestions = ({ image, isSelected, onPress, text }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      <Image
        resizeMode="contain"
        source={{
          uri: image,
        }}
        style={styles.optionImage}
      />
      <Text style={isSelected ? styles.slectedText : styles.optionText}>
        {text}
      </Text>
    </Pressable>
  );
};

MultipleChoiceQuestions.propTypes = {
  image: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string,
};

MultipleChoiceQuestions.defaultProps = {
  isSelected: false,
  onPress: () => {},
  text: "Default",
};

export default MultipleChoiceQuestions;
