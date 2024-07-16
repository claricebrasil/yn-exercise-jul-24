import { DomainOption } from '../domain/types'

export const capitalizeName = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1)

export const formatedInterest = (interests: DomainOption[]) =>
    interests
        .filter(interest => Object.values(interest)[0].isChecked)
        .map(interest => Object.values(interest)[0].label)
        .join(', ')
