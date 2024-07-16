import { object, string, mixed } from 'yup'

import {
    IS_EMAIL_MSG,
    IS_NUMBER_MSG,
    IS_REQUIRED_MSG,
    MAX_AGE,
    MAX_AGE_MSG,
    MAX_WORDS_MSG,
    MIN_AGE,
    MIN_AGE_MSG,
    MIN_INTEREST_SELECTED,
    MIN_INTEREST_SELECTED_MSG,
    MIN_WORDS_MSG,
    NAME_MAX_WORDS,
    NAME_MIN_WORDS,
} from '../../constants/formValidation'

import { InterestForm } from './Form.view'

export const validationSchema = object().shape({
    name: string()
        .required(IS_REQUIRED_MSG)
        .test('hasMaxWords', MAX_WORDS_MSG(NAME_MAX_WORDS), (value: string) => {
            const wordCount = (value?.match(/\S+/g) || []).length
            return wordCount <= NAME_MAX_WORDS
        })
        .test('hasMinWords', MIN_WORDS_MSG(NAME_MIN_WORDS), (value: string) => {
            const wordCount = (value?.match(/\S+/g) || []).length
            return wordCount >= NAME_MIN_WORDS
        }),
    mail: string().required(IS_REQUIRED_MSG).email(IS_EMAIL_MSG),
    age: string()
        .required(IS_REQUIRED_MSG)
        .test(
            'isNumber',
            IS_NUMBER_MSG,
            (value: string) => !isNaN(Number(value)),
        )
        .test('maxAge', MAX_AGE_MSG(MAX_AGE), (value: string) => {
            const age = Number(value)
            return age <= MAX_AGE
        })
        .test('minAge', MIN_AGE_MSG(MIN_AGE), (value: string) => {
            const age = Number(value)
            return age >= MIN_AGE
        }),
    interests: mixed()
        .required(IS_REQUIRED_MSG)
        .test(
            'atLeastOneInterestSelected',
            MIN_INTEREST_SELECTED_MSG(MIN_INTEREST_SELECTED),
            (value: InterestForm | undefined) => {
                const interests = Array.isArray(value) ? value : []
                const interestsSelectedvalue = interests.filter(
                    option => option.checked,
                )

                return interestsSelectedvalue.length >= MIN_INTEREST_SELECTED
            },
        ),
})
