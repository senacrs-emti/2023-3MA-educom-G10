import { Question } from "@/types";

export const BASE_OPTION_STYLE = "flex flex-row bg-neutral-900 border-2 border-transparent h-12 items-center rounded"
export const SELECTED_OPTION_STYLE = "flex flex-row bg-neutral-900 border-2 border-blue-500 h-12 items-center rounded"
export const CORRECT_OPTION_STYLE = "flex flex-row bg-green-800 border-2 border-transparent h-12 items-center rounded"
export const WRONG_QUESTION_STYLE = "flex flex-row bg-red-800 border-2 border-transparent h-12 items-center rounded"

export const questions = [
  {
    title: 'Pergunta 1',
    options: [
      {
        label: 'X',
        isCorrect: false,
      },
      {
        label: 'Y',
        isCorrect: false
      },
      {
        label: 'Z',
        isCorrect: true,
      }
    ]
  },
  {
    title: 'Pergunta 2',
    options: [
      {
        label: 'X',
        isCorrect: false,
      },
      {
        label: 'Y',
        isCorrect: false
      },
      {
        label: 'Z',
        isCorrect: true,
      }
    ]
  },
  {
    title: 'Pergunta 3',
    options: [
      {
        label: 'X',
        isCorrect: false,
      },
      {
        label: 'Y',
        isCorrect: false
      },
      {
        label: 'Z',
        isCorrect: true,
      }
    ]
  },
  {
    title: 'Pergunta 4',
    options: [
      {
        label: 'X',
        isCorrect: false,
      },
      {
        label: 'Y',
        isCorrect: false
      },
      {
        label: 'Z',
        isCorrect: true,
      }
    ]
  },

] as Question[]