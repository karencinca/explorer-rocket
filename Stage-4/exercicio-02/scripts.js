const students = [
    {
        name: 'John',
        firstTest: 8,
        secondTest: 7.5,
    },
    {
        name: 'Laura',
        firstTest: 5,
        secondTest: 7,
    },
    {
        name: 'Mike',
        firstTest: 4,
        secondTest: 5,
    },
]

function calculateFinalGrade(firstTest, secondTest) {
        return ((firstTest + secondTest) / 2).toFixed(1)
}

function printGrade(student) {
    if (calculateFinalGrade(student.firstTest, student.secondTest) >= 7) {
      return `A média do(a) aluno(a) ${student.name} é: ${calculateFinalGrade(student.firstTest, student.secondTest)}
      Parabéns, ${student.name}! Você foi aprovado(a)!`  
    } else {
        return `A média do(a) aluno(a) ${student.name} é: ${calculateFinalGrade(student.firstTest, student.secondTest)}
        Não foi dessa vez, ${student.name}. Tente novamente!`
    }
}

for (let student of students) {
    let gradeMessage = printGrade(student)
    alert(gradeMessage)
}