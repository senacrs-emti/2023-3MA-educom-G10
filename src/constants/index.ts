import { Question } from "@/types";

export const BASE_OPTION_STYLE = "flex flex-row bg-neutral-900 border-2 border-transparent h-12 items-center rounded"
export const SELECTED_OPTION_STYLE = "flex flex-row bg-neutral-900 border-2 border-blue-500 h-12 items-center rounded"
export const CORRECT_OPTION_STYLE = "flex flex-row bg-green-800 border-2 border-transparent h-12 items-center rounded"
export const WRONG_QUESTION_STYLE = "flex flex-row bg-red-800 border-2 border-transparent h-12 items-center rounded"

export const questions: Question[] = [
  {
    title: "Qual é um dos principais benefícios mentais da atividade física?",
    options: [
      {
        label: "Aumento da pressão arterial",
        isCorrect: false,
      },
      {
        label: "Redução do estresse",
        isCorrect: true,
      },
      {
        label: "Aumento da insônia",
        isCorrect: false,
      },
    ],
  },
  {
    title: "Como a atividade física pode afetar a autoestima?",
    options: [
      {
        label: "Reduzindo a autoestima",
        isCorrect: false,
      },
      {
        label: "Não tem impacto na autoestima",
        isCorrect: false,
      },
      {
        label: "Elevando a autoestima",
        isCorrect: true,
      },
    ],
  },
  {
    title: "Qual é o efeito da atividade física no controle do peso corporal?",
    options: [
      {
        label: "Aumenta o peso",
        isCorrect: false,
      },
      {
        label: "Não tem impacto no peso",
        isCorrect: false,
      },
      {
        label: "Ajuda a controlar o peso",
        isCorrect: true,
      },
    ],
  },
  {
    title: "O que a atividade física faz para a saúde cardiovascular?",
    options: [
      {
        label: "Aumenta o risco de doenças cardíacas",
        isCorrect: false,
      },
      {
        label: "Reduz a circulação sanguínea",
        isCorrect: false,
      },
      {
        label: "Fortalece o coração e reduz o risco de doenças cardíacas",
        isCorrect: true,
      },
    ],
  },
  {
    title: "Que tipo de exercício pode melhorar a flexibilidade e o equilíbrio?",
    options: [
      {
        label: "Corrida",
        isCorrect: false,
      },
      {
        label: "Musculação",
        isCorrect: false,
      },
      {
        label: "Ioga e alongamento",
        isCorrect: true,
      },
    ],
  },
  {
    title: "Qual é um benefício físico da atividade física?",
    options: [
      {
        label: "Aumento do estresse",
        isCorrect: false,
      },
      {
        label: "Redução do sono",
        isCorrect: false,
      },
      {
        label: "Fortalecimento muscular e ósseo",
        isCorrect: true,
      },
    ],
  },
  {
    title: "O que a atividade física pode fazer pela concentração e memória?",
    options: [
      {
        label: "Diminuir a concentração",
        isCorrect: false,
      },
      {
        label: "Não tem impacto na concentração",
        isCorrect: false,
      },
      {
        label: "Melhorar a concentração e a memória",
        isCorrect: true,
      },
    ],
  },
  {
    title: "Qual é o papel da atividade física na melhora da resiliência mental?",
    options: [
      {
        label: "Reduz a resiliência mental",
        isCorrect: false,
      },
      {
        label: "Não tem impacto na resiliência",
        isCorrect: false,
      },
      {
        label: "Desenvolve a resiliência mental",
        isCorrect: true,
      },
    ],
  },
  {
    title: "Qual é o efeito da atividade física na longevidade?",
    options: [
      {
        label: "Reduz a expectativa de vida",
        isCorrect: false,
      },
      {
        label: "Não tem impacto na expectativa de vida",
        isCorrect: false,
      },
      {
        label: "Está associada a uma maior expectativa de vida",
        isCorrect: true,
      },
    ],
  },
  {
    title: "Qual é um dos principais benefícios mentais da atividade física?",
    options: [
      {
        label: "Aumento do estresse",
        isCorrect: false,
      },
      {
        label: "Melhora do humor",
        isCorrect: true,
      },
      {
        label: "Redução da concentração",
        isCorrect: false,
      },
    ],
  },
];