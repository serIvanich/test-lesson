import {calculator, rest, rest2, sum} from "./tasks";

// test('sum of two numbers', () => {
//     //1. тестовые данные
//     const a: number = 10
//     const b: number = 8
//
//     //2 Выполнение тестируемого кода с тестовыми данными
//     const result = sum(a, b)
//
//     //3 проверка ожидаемого результата
//     expect(result).toBe((18))
//
// })

test('sum of two number', () => {
    expect(sum(10, 8)).toBe(18)
})

test('sum several number', () => {
    expect(rest(10, 8)).toBe(18)
    expect(rest(10, 8, 12)).toBe(30)
    expect(rest(10, 8, 6, 6, 10, 24)).toBe(64)
})

test('sum several number with other argument', () => {
    expect(rest2('s', false, 10, 8)).toBe(18)
    expect(rest2('a', false, 10, 8, 12)).toBe(30)
    expect(rest2('b', false, 10, 8, 6, 6, 10, 24)).toBe(64)
})

test('calculator', () => {
    expect(calculator(2, 3, {type: 'sum'})).toBe(5)
    expect(calculator(2, 3, {type: 'mult'})).toBe(6)
    expect(calculator(3, 2, {type: 'div'})).toBe(1.5)
    expect(() => calculator(3, 0, {type: 'div'})).toThrow('devided by zero')
    expect(() => calculator(3, 0, {type: 'div'})).toThrowError()
    expect(calculator(2, 3, {type: 'sub'})).toBe(-1)
})