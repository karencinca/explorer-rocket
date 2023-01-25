let firstNumber = prompt('Insira o primeiro número:')
let secondNumber = prompt('Insira o segundo número:')

firstNumber = Number(firstNumber)
secondNumber = Number(firstNumber)

let sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let mult = firstNumber * secondNumber
let division = firstNumber / secondNumber
let remainder = firstNumber % secondNumber

alert(`A soma do dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${division}`)
alert(`O resto da divisão dos dois números é: ${remainder}`)

if (sum % 2 == 0) {
    alert(`A soma dos dois números é par: ${sum}`)
} else {
    alert(`A soma dos dois números é ímpar: ${sum}`)
}

if (firstNumber == secondNumber) {
    alert(`Os números inseridos são iguais.`)
} else {
    alert(`Os números inseridos são diferentes.`)
} 


