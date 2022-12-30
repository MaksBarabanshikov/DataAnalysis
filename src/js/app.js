window.addEventListener('load', () => {
    const myInputDOM = document.querySelector('#myInput')
    const btnAddDOM = document.querySelector('#btnAdd')
    const btnClearDOM = document.querySelector('#btnClear')
    const btnCalcDOM = document.querySelector('#calculate')
    const resultDOM = document.querySelector('#resultArr')
    const resultSectionDOM = document.querySelector('#resultSection')

    const resultSumDOM = document.querySelector('#sumRes')
    const resultAverageDOM = document.querySelector('#averageRes')
    const resultInterDOM = document.querySelector('#interRes')
    const resultSortDOM = document.querySelector('#sortRes')

    const arr = [] 

    // lisnters

    myInputDOM.addEventListener('keydown', handlerKeyDown)

    btnAddDOM.addEventListener('click', handlerAdd)

    btnClearDOM.addEventListener('click', handlerClear)

    btnCalcDOM.addEventListener('click', handlerCalculate)

    // handlers

    function handlerKeyDown(event) {
        if (event.key === 'Enter') {
            handlerAdd()
        }
    }

    function handlerAdd() {
        const inputValue = Number(myInputDOM.value)
        arr.push(inputValue)
        checkForBtn(arr)
        myInputDOM.value = ''
        myInputDOM.focus()
        drawResult([...arr].join(','))
    }

    function handlerClear() {
        arr.length = 0
        myInputDOM.value = ''
        myInputDOM.focus()
        checkForBtn(arr)
        drawResult()
        hideResult()
    }
    
    function handlerCalculate() {
        showResult()
        CalculateMain(arr)
    }

    // Calculate Methods

    function CalculateMain(arr) {
        sum()
        average()
        inter()
        sort()
        // issue 1
        function sum() {
            const sum = [...arr].reduce((a,b) => a + b)
            resultSumDOM.textContent = sum.toString()
        }
        // issue 2
        function average() {
            const summa = [...arr].reduce((a,b) => a + b)
            // const average = sum5 / arr.length
            const average = summa/ arr.length
            resultAverageDOM.textContent = average.toString()
        }
        // issue 3
        function sort() {
            const sort = [...arr].sort((a,b) => a - b).join(',')

            arr.length >= 8 ? resultSortDOM.classList.add('fs-6') : resultSortDOM.classList.add('fs-5')
            resultSortDOM.textContent = sort.toString()
        }
        // issue 4
        function inter() {
            const inter = Math.random()
            resultInterDOM.textContent = inter.toString()
        }

    }

    // helper
    function drawResult(text) {
        if (text) {
            return resultDOM.textContent = text
        }
        resultDOM.textContent = ''
    }

    function checkForBtn(arr) {
        if (arr.length >= 2) {
            console.log(btnCalcDOM.disabled)
          return btnCalcDOM.disabled = false
        } else {
            return btnCalcDOM.disabled = true
        }
    }

    function showResult() {
        resultSectionDOM.classList.remove('hidden')
    }

    function hideResult() {
        if (!resultSectionDOM.classList.contains('hidden')) {
            resultSectionDOM.classList.add('hidden')
        }
    }
})