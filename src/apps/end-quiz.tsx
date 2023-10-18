import { BASE_OPTION_STYLE, CORRECT_OPTION_STYLE, WRONG_QUESTION_STYLE, questions } from "../constants"
import { Answer } from "../types"
import { Pressable, SafeAreaView, ScrollView, Text, View, getAlphabetLetterByIndex } from "../utils"

interface Props {
  answers: Answer[]
  handleRestartQuiz: () => void
}

export default function ({ answers, handleRestartQuiz }: Props) {
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