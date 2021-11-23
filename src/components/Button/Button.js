import React from "react";
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const Button = ({ disabled, onPress, text }) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, disabled ? styles.disabledContainer : {}]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
  onPress: () => {},
};

export default Button;
