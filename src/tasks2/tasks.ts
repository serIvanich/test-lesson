// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.

export function sum(...nums: Array<any>): number {

    return nums.reduce((acc, el) => acc + el)

}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    let triangleType = ''
    if (a + b < c || a + c < b || c + b < a) {
        triangleType = '00'
    } else if (a === b && a === c) {
        triangleType = '10'
    } else if (a === b || a === c || b === c) {
        triangleType = '01'
    } else {
        triangleType = '11'
    }
    return triangleType
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let sum = 0
    for (let num of `${number}`) {
        sum += +num
    }
    return sum
}


// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sumOddNum = 0
    let sumEvenNum = 0
    for (let i = 0 ; i < arr.length; i++){
        i % 2 === 0 ? sumEvenNum += arr[i] : sumOddNum += arr[i]
    }
    // arr.forEach((num, i) => i % 2 === 0 ? sumEvenNum += arr[i] : sumOddNum += arr[i])
    return sumEvenNum > sumOddNum
}


// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    return Math.sqrt(areaCr / Math.PI) < (Math.sqrt(areaSq) / 2)
}


// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    let result = []
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    for (let i = 0; i < banknotes.length; i++){
        while (amountOfMoney >= banknotes[i]){
            result.push(banknotes[i])
            amountOfMoney -= banknotes[i]
        }
    }
    return result
}