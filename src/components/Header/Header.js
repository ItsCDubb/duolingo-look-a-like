import React from "react";
import { View } from "react-native";
import ProgressBar from "../ProgressBar";
import styles from "./styles";

const Header = ({ progress }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress} />
    </View>
  );
};

export default Header;
