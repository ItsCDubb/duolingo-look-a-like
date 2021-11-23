import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import Mascot from "../../../assets/images/mascot.png";
import Button from "../Button";
import PropTypes from "prop-types";
import styles from "./styles";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");

  const onButtonPress = () => {
    if (
      question.answer.toLowerCase().trim() === input.toLocaleLowerCase().trim()
    ) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };

  return (
    <>
      <Text style={styles.question}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image source={Mascot} style={styles.mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Type the sentence in English"
        value={input}
        onChangeText={setInput}
        textAlignVertical="top"
        multiline
      />
      <Button text="Check" onPress={onButtonPress} disabled={false} />
    </>
  );
};

OpenEndedQuestion.propTypes = {};

export default OpenEndedQuestion;
