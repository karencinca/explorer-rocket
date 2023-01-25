/*variáveis*/
const screenOne = document.querySelector('.screen-one')
const screenTwo = document.querySelector('.screen-two')
const cookie = document.getElementById('closed-cookie')
const resetBtn = document.querySelector('#reset-btn')
let messages = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'Seus sonhos não precisam de plateia, eles só precisam de você.',
    'Imagine uma nova história para sua vida e acredite nela.',
    'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.',
    'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
    'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
    'Só é lutador quem sabe lutar consigo mesmo.',
    'Seja o piloto de suas histórias e voe o mais alto que conseguir.',
    'Se a caminhada está difícil, é porque você está no caminho certo.',
    'Viver não é esperar a tempestade passar, é aprender a dançar na chuva.',
    'Nenhuma noite é escura demais para aqueles que têm luz própria.',
    'Não fique esperando o futuro para ser feliz, faça do presente a sua alegria.'
]

const message = document.querySelector('#message')

/*eventos*/
cookie.addEventListener('click', showMessage)
resetBtn.addEventListener('click', reset)

/*funções*/
function showMessage(e) {
    e.preventDefault()
    screenOne.classList.add('hide')
    screenTwo.classList.remove('hide')
    selectMessage()
}

function reset(e) {
    e.preventDefault()
    screenOne.classList.remove('hide')
    screenTwo.classList.add('hide')
}

function selectMessage() {
    let index = Math.round(Math.random() * 11)
    message.innerHTML = messages[index]
}