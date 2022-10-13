window.addEventListener('load', () => {
    const myInputDOM = document.querySelector('#myInput')
    const btnAddDOM = document.querySelector('#btnAdd')
    const btnClearDOM = document.querySelector('#btnClear')
    const resultDOM = document.querySelector('#resultArr')

    const arr = [] 

    // lisnters

    myInputDOM.addEventListener('keydown', handlerKeyDown)

    btnAddDOM.addEventListener('click', handlerAdd)

    btnClearDOM.addEventListener('click', handlerClear)

    // handlers

    function handlerKeyDown(event) {
        if (event.key === 'Enter') {
            handlerAdd()
        }
    }

    function handlerAdd() {
        const inputValue = Number(myInputDOM.value)
        arr.push(inputValue)
        myInputDOM.value = ''
        myInputDOM.focus()
        drawResult([...arr].join(','))
    }

    function handlerClear() {
        arr.length = 0
        myInputDOM.value = ''
        myInputDOM.focus()
        drawResult()
    }

    // helper
    function drawResult(text) {
        if (text) {
            return resultDOM.textContent = text 
        }
        resultDOM.textContent = '' 
    }
})