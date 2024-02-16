
function ActionButton( inner, action ) {
    let button = document.createElement('button')
    button.innerText = inner
    button.onclick = action
    return button
}

function CounterButton() {
    let button = document.createElement('button')
    let val = 0
    button.innerText = val
    button.onclick = () => {
        val++
        button.innerText = val
    }
    return button
}

function Seconds() {
    let par = document.createElement('p')
    let digit
    window.setInterval(() => {
        digit = new Date().getSeconds()
    digit = String(digit).length == 1 ? '0' + digit : digit 
    par.innerText = digit
    }, 1000)
    return par
}

function Minutes() {
    let par = document.createElement('p')
    let digit
    window.setInterval(() => {
        digit = new Date().getMinutes()
    digit = String(digit).length == 1 ? '0' + digit : digit 
    par.innerText = digit
    }, 1000)
    return par
}

function Hours() {
    let par = document.createElement('p')
    let digit
    window.setInterval(() => {
        digit = new Date().getHours()
    digit = String(digit).length == 1 ? '0' + digit : digit 
    par.innerText = digit
    }, 1000)
    return par
}