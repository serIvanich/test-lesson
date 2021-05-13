
export function sum(a: number, b: number): number {
    return a + b
}

export function mult(a: number, b: number): number {
    return a * b
}

export function div(a: number, b: number): number | undefined{
    if (b !== 0)  return a / b
}

export function sub(a: number, b: number): number {
    return a - b
}
export type ActionType = { type: 'sum' | 'mult' | 'div' | 'sub'}

export function  calculator(a: number, b: number, action: ActionType) {
    switch (action.type) {
        case 'sum':
            return a + b
        case 'sub':
            return a - b
        case 'div':
            if (b===0) {
                throw new Error('devided by zero')
            }
            return a / b
        case 'mult':
            return a * b
        default:
            return new Error('Unknown action')

    }
}

export function rest(...numbers: Array<number>) {
    return numbers.reduce((acc, el) => acc + el)
}

export function rest2(a: string, b: boolean, ...num: Array<number>) {
    return num.reduce((acc, el) => acc + el)
}


export type StudentType = {
    name: string
    isStudent: boolean
    friends: Array<string>
}

export const addFriends = (students: Array<StudentType>): Array<StudentType> => {
    const studentNames = students.map(st => st.name)
    return students.map(st => {
        const namesWithoutSt = studentNames.filter(name => name !== st.name)
        return {
            ...st,
            friends: namesWithoutSt
        }
    })
}



