import { Answer } from '@/types';
import { useState } from 'react';
import { BASE_OPTION_STYLE, SELECTED_OPTION_STYLE, questions } from "../constants";
import { Pressable, SafeAreaView, Text, View, getAlphabetLetterByIndex } from "../utils";
import EndQuiz from './end-quiz';
import { Question } from '@/components/question';

export default function () {
  const [questionId, setQuestionId] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [answers, setAnswers] = useState<Answer[] | []>([])

  function handleSelectOption(questionId: number) {
    setSelectedOption(questionId)
  }

  function handleNextQuestion() {
    if (selectedOption === null) return

    const answer: Answer = {
      questionId,
      answerId: selectedOption,
    }

    setAnswers((prev) => [...prev, answer])
    setSelectedOption(null)

    setQuestionId((prev) => prev + 1)
    console.log(`Registered answer ${JSON.stringify(answer)}`)
  }

  function handleRestartQuiz() {
    setQuestionId(0)
    setSelectedOption(null)
    setAnswers([])
  }

  if (questionId >= questions.length && answers.length > 0) {
    return <EndQuiz answers={answers} handleRestartQuiz={handleRestartQuiz} />
  }

  return (
    <SafeAreaView className="h-full flex justify-center p-10 gap-8">
      <Text className="self-center">Gym Quiz</Text>

      <View>
        <Text className="font-bold text-xl mb-4">{questions[questionId].title}</Text>

        <View className="flex flex-col gap-1">
          {questions[questionId].options.map((question, optionId) => (
            <Question 
              key={`${question.label}-${questionId}`}
              optionId={optionId}
              question={question}
              selectedOption={selectedOption}
              onSelectOption={handleSelectOption} 
            />
          ))}

          <Pressable onPress={handleNextQuestion} className='self-end pt-4'>
            <Text disabled={!selectedOption} className='py-2 px-3 bg-green-800 text-white rounded disabled:opacity-50'>Próxima pergunta</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}