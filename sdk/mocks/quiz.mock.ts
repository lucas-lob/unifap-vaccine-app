type quizSchema = {
  question: string
  answers: string[]
  correctAnswer: string
}

export const QUIZ_MOCK: quizSchema[] = [
  {
    question: 'Qual vacina previne sarampo, caxumba e rubéola?',
    answers: ['HPV', 'Tríplice Viral', 'Hepatite B', 'Meningocócica'],
    correctAnswer: 'Tríplice Viral'
  }
]