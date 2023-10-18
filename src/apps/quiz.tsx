import { Answer } from '@/types';
import { useState } from 'react';
import { BASE_OPTION_STYLE, SELECTED_OPTION_STYLE, questions } from "../constants";
import { Pressable, SafeAreaView, Text, View, getAlphabetLetterByIndex } from "../utils";
import EndQuiz from './end-quiz';

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
            <Pressable key={question.label + optionId} onPress={() => handleSelectOption(optionId)} className={selectedOption === optionId ? SELECTED_OPTION_STYLE : BASE_OPTION_STYLE}>
              <View className="bg-neutral-800 h-full w-12 flex items-center justify-center text-center">
                <Text className="text-white uppercase">{getAlphabetLetterByIndex(optionId)}</Text>
              </View>
              <Text className="px-4 text-white">{question.label}</Text>
            </Pressable>
          ))}

          <Pressable onPress={handleNextQuestion} className='self-end pt-4'>
            <Text disabled={!selectedOption} className='py-2 px-3 bg-green-800 text-white rounded disabled:opacity-50'>Próxima pergunta</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}