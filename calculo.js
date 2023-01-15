//Guardar constantes y variables
const screen = document.getElementById('entrada'),
    botones = document.getElementById('botones')

let operationStatus = false, number1, typeOperation
screen.value = '0'

const calculator = () => {
    if (!botones) return
    botones.addEventListener('click', e => {
        const t = e.target, d = t.dataset;
        // detectar qué se pulsó
        if (d.number) writeScreen(d.number)
        if (d.math) getOperation(t, d.math)
        if (d.operation) runOperation(d.operation)
    })
}

const writeScreen = number => {
    screen.value === '0' || operationStatus === true
        ? screen.value = number
        : number === '.' && !screen.value.includes('.')
            ? screen.value += number
            : number !== '.'
                ? screen.value += number
                : null
    operationStatus = false
}
const getOperation = (element, operation) => {
    operationStatus = true
    number1 = Number(screen.value)
    typeOperation = operation
    screen.value = element.textContent
}
const runOperation = operation => {

    const getResult = (number1,typeOperation) => {
        const number2 = Number(screen.value)
        let resultado
        switch (typeOperation) {
            case 'mas':
                resultado = number1 + number2
                break;
            case 'menos':
                resultado = number1 - number2
                break;
            case 'por':
                resultado = number1 * number2
                break;
            case 'dividido':
                resultado = number1 / number2
                break;
            case 'potencia':
                resultado = number1 ** number2
                break;
            case 'raiz':
                resultado = number1 ** (1/number2)
                break;
            case 'porcentaje':
                resultado = (number1/100) * number2
                break;
        }
        resultado === Infinity
            ? screen.value = 'Error'
            : screen.value = resultado
    }
    operation === 'borrar'
        ? screen.value = '0'
        : getResult(number1,typeOperation)
    operationStatus = true
}


calculator()