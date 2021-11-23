import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import questions from "./assets/data/allQuestions";
import MultipleChoiceQuestion from "./src/components/MultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import Header from "./src/components/Header";
import styles from "./App.styles";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You have reached the end!");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrong = () => {
    Alert.alert("No!");
  };

  return (
    <View style={styles.root}>
      <Header progress={currentQuestionIndex / questions.length} />
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <MultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
    </View>
  );
};

export default App;
