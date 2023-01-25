const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height') 

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },

    close() {
        Modal.wrapper.classList.remove('open')
    }
}

const AlertError = {
    element: document.querySelector('.alert-error'),
    open() {
        AlertError.element.classList.add('open')
    },
    close() {
        AlertError.element.classList.remove('open')
    }
}

form.onsubmit = function(event) {
    event.preventDefault() 

    const weight = inputWeight.value 
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = NotANumber(weight) || NotANumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message
    Modal.open()
}

function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if(event.key === 'Escape') {
        Modal.close()
    }
}

function NotANumber(value) {
    return isNaN(value) || value == ''
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()


