import { StateCreator, create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { DomainAnswers } from '../domain/types'

type AnswersStoreProperties = DomainAnswers

type AnswersStoreActions = {
    setAnswers: (answers: DomainAnswers) => void
    getAnswers: () => DomainAnswers
}

export type AnswersStore = AnswersStoreProperties & AnswersStoreActions

const initialState: AnswersStoreProperties = {
    age: '',
    interests: [],
    name: '',
    mail: '',
}

const createStore: StateCreator<AnswersStore> = (set, get) => {
    const storedState = JSON.parse(localStorage.getItem('answersState') || '{}')
    return {
        ...initialState,
        ...storedState,
        setAnswers: answers =>
            set(state => {
                const _state = { ...state, ...answers }
                localStorage.setItem('answersState', JSON.stringify(_state))
                return _state
            }),
        getAnswers: () => ({
            age: get().age,
            name: get().name,
            mail: get().mail,
            interests: get().interests,
        }),
    }
}

export const useAnswersStore = create(devtools(createStore))
