import { Answer } from '@/types';
import { useState } from 'react';
import { questions } from "../constants";
import { Pressable, SafeAreaView, ScrollView, Text, View, getAlphabetLetterByIndex } from "../utils";

const BASE_OPTION_STYLE = "flex flex-row bg-neutral-900 h-12 items-center rounded"
const SELECTED_OPTION_STYLE = "flex flex-row bg-neutral-700 h-12 items-center rounded"
const CORRECT_OPTION_STYLE = "flex flex-row bg-green-800 h-12 items-center rounded"
const WRONG_QUESTION_STYLE = "flex flex-row bg-red-800 h-12 items-center rounded"

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
    const correctAnswers = answers.filter((answer: Answer) => questions[answer.questionId].options[answer.answerId].isCorrect)
    const score = correctAnswers.length
    return (
      <SafeAreaView className="flex items-center justify-center p-10">
        <View className='h-24 flex items-center justify-center gap-1'>
          <Text className='font-bold text-xl'>Você completou o quiz!</Text>
          <Text className='text-gray-700 text-center'>Verifique sua pontuação</Text>
        </View>

        <ScrollView className="w-full">
          {questions.map((question, questionId) => {
            return (
              <View key={questionId} className="flex flex-col mb-8">
                <Text className="font-bold text-xl mb-4">{question.title}</Text>

                <View className="flex flex-col gap-1">
                  {question.options.map((option, optionId) => {
                    const isCorrect = option.isCorrect
                    const isThisAnsweredSelectedByUser = answers.find((answer: Answer) => answer.questionId === questionId && answer.answerId === optionId)
                    let style = BASE_OPTION_STYLE
                    if (isCorrect) {
                      style = CORRECT_OPTION_STYLE
                    } else if (isThisAnsweredSelectedByUser && !isCorrect) {
                      style = WRONG_QUESTION_STYLE
                    }

                    return (
                      <View key={option.label + optionId} className={style}>
                        <View className="bg-neutral-800 h-full w-12 flex items-center justify-center text-center">
                          <Text className="text-white uppercase">{getAlphabetLetterByIndex(optionId)}</Text>
                        </View>
                        <Text className="px-4 text-white">{option.label}</Text>
                      </View>
                    )
                  })}
                </View>
              </View>
            )
          })}

          <View className='flex flex-row mb-8 items-center justify-between'>
            <Text className='font-bold'>Pontuação: {score}/{questions.length}</Text>

            <Pressable onPress={handleRestartQuiz} className='self-end'>
              <Text className='py-2 px-3 bg-green-800 text-white rounded disabled:opacity-50'>Tentar novamente</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
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