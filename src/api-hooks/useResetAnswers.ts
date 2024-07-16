import { useMutation } from 'react-query'

import { resetAnswersFromApi } from '../api/api'
import { apiToDomainAnswersConverter } from '../api/converters'
import { useAnswersStore } from '../state'

export const useResetAnswers = () => {
    const answesStore = useAnswersStore()

    const reset = useMutation(() => resetAnswersFromApi(), {
        onSuccess: response => {
            const domainAnswers = apiToDomainAnswersConverter(response.data)
            answesStore.setAnswers(domainAnswers)
        },
    })

    const resetAnswers = () => {
        reset.mutate()
    }

    return { resetAnswers }
}
