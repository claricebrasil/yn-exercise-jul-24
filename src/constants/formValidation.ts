export const IS_EMAIL_MSG = 'This field must be a valid email'
export const IS_NUMBER_MSG = 'This field must be a number'
export const IS_REQUIRED_MSG = 'This field is required'

export const MAX_AGE_MSG = (maxAge: number) =>
    `The age must be ${maxAge} or less`
export const MIN_AGE_MSG = (minAge: number) =>
    `The age must be ${minAge} or older`
export const MIN_INTEREST_SELECTED_MSG = (minInterest: number) =>
    `At least ${minInterest} interest option is required`
export const MAX_WORDS_MSG = (maxLength: number) =>
    `At most ${maxLength} words are allowed`
export const MIN_WORDS_MSG = (minWords: number) =>
    `At least ${minWords} words are required`

export const MAX_AGE = 99
export const MIN_AGE = 18
export const MIN_INTEREST_SELECTED = 1
export const NAME_MIN_WORDS = 2
export const NAME_MAX_WORDS = 4
