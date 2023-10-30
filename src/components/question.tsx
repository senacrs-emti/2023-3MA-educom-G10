import { BASE_OPTION_STYLE, SELECTED_OPTION_STYLE } from "@/constants"
import { Question } from "@/types"
import { Pressable, Text, View, getAlphabetLetterByIndex } from "@/utils"

interface QuestionProps {
    optionId: number
    question: any
    selectedOption: number
    onSelectOption: (optionId: number) => void
}

export function Question({ question, optionId, selectedOption, onSelectOption }: QuestionProps) {
    return (
        <Pressable onPress={() => onSelectOption(optionId)} className={selectedOption === optionId ? SELECTED_OPTION_STYLE : BASE_OPTION_STYLE}>
            <View className="bg-neutral-800 h-full w-12 flex items-center justify-center text-center">
                <Text className="text-white uppercase">{getAlphabetLetterByIndex(optionId)}</Text>
            </View>
            <Text className="px-4 text-white">{question.label}</Text>
        </Pressable>
    )
}