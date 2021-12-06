import React, { useState } from "react";
import { Text, View } from "react-native";
import WordOption from "../WordOption";
import Button from "../Button";
import styles from "./styles";

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);
  const onButtonPress = () => {
    if (selected === question.correct) {
      onCorrect();
    } else {
      onWrong();
    }
    setSelected(null);
  };
  return (
    <>
      <Text style={styles.question}>Fill in the blank.</Text>
      <View style={styles.row}>
        <Text style={styles.text}>{question.textPre}</Text>
        <View style={styles.blank}>
          {selected && (
            <WordOption text={selected} onPress={() => setSelected(null)} />
          )}
        </View>
        <Text style={styles.text}>{question.textPost}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <WordOption
            key={option.id}
            text={option.text}
            isSelected={selected === option}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

export default FillInTheBlank;
