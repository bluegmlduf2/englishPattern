import { defineStore } from 'pinia'

// interface responseData {
//   data: Array<{
//     createdAt: string
//     expression: Array<{
//       [key: string]: string
//     }>
//     dialogue: Array<{
//       [key: string]: {
//         [key: string]: string
//       }
//     }>
//     exercises: Array<{
//       [key: string]: string
//     }>
//   }>
// }

export interface Expression {
  [key: string]: string
}

export interface Dialogue {
  [key: string]: {
    [key: string]: string
  }
}
export interface Exercises {
  [key: string]: string
}

interface EnglishPattern {
  createdAt: string
  expression: Array<Expression>
  dialogue: Array<Dialogue>
  exercises: Array<Exercises>
}

export const useEnglishPatternStore = defineStore('englishPatternStore', {
  state: (): EnglishPattern => ({
    createdAt: '',
    expression: [],
    dialogue: [],
    exercises: [],
  }),
  actions: {
    async initEnglishPattern() {
      const response = await $fetch('/api/english')
      if (response.data !== null) {
        this.createdAt = response.data[0].createdAt
        this.expression.push(response.data[0].expression)
        this.dialogue.push(response.data[0].dialogue)
        this.exercises.push(...response.data[0].exercises)
      }
    },
  },
})
