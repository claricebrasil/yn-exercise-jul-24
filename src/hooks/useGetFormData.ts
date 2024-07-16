import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { validationSchema } from '../pages/Form/Form.config'
import { useAnswersStore } from '../state'

export const useGetFormData = () => {
    const answers = useAnswersStore(state => state.getAnswers())

    const interests = answers.interests.map(option => {
        const [key, value] = Object.entries(option)[0]

        return { id: key, checked: value.isChecked, label: value.label }
    })

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name: answers.name,
            age: answers.age,
            mail: answers.mail,
            interests,
        },
    })

    return {
        control,
        handleSubmit,
        formState: { errors, isValid },
    }
}
