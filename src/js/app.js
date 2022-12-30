window.addEventListener('load', () => {
    /**
     * Прязываем переменные к DOM
     *
     * @type {Element}
     */
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
    /**
    * начальное значение массива
    * @type {Array}
    */
    const arr = []

    /**
     * Добавляем слушатели событий
     */

    myInputDOM.addEventListener('keydown', handlerKeyDown)

    btnAddDOM.addEventListener('click', handlerAdd)

    btnClearDOM.addEventListener('click', handlerClear)

    btnCalcDOM.addEventListener('click', handlerCalculate)

    /**
     * Добавление елементов на Enter
     *
     * @type { Function }
     *
     * @param { event } событие нажатия на клавишу
     *
     * @return Добавляем результат из поля ввода
     */

    function handlerKeyDown(event) {
        if (event.key === 'Enter') {
            handlerAdd()
        }
    }

    /**
     * Добавление елементов по клику по кнопке
     *
     * @type { Function }
     *
     * @return Добавляем результат из поля ввода
     */

    function handlerAdd() {
        const inputValue = Number(myInputDOM.value)
        arr.push(inputValue)
        checkForBtn(arr)
        myInputDOM.value = ''
        myInputDOM.focus()
        drawResult([...arr].join(','))
    }

    /**
     * Удаление елементов по клику по кнопке
     *
     * @type { Function }
     *
     * @return очищаем поля ввода
     */

    function handlerClear() {
        arr.length = 0
        myInputDOM.value = ''
        myInputDOM.focus()
        checkForBtn(arr)
        drawResult()
        hideResult()
    }

    /**
     * Рассчитать
     *
     * @type { Function }
     *
     * @return Запускаем функции для рассчета
     */
    
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
        /**
         * Рассчитать сумму
         *
         * @type { Function }
         *
         * @return Выводим содержимое
         */
        function sum() {
            const sum = [...arr].reduce((a,b) => a + b)
            resultSumDOM.textContent = sum.toString()
        }
        // issue 2
        /**
         * Рассчитать среднее знечние
         *
         * @type { Function }
         *
         * @return Выводим содержимое
         */
        function average() {
            const summa = [...arr].reduce((a,b) => a + b)
            // const average = sum5 / arr.length
            const average = summa/ arr.length
            resultAverageDOM.textContent = average.toString()
        }
        // issue 3
        /**
         * сортировка массива
         *
         * @type { Function }
         *
         * @return Выводим содержимое
         */
        function sort() {
            const sort = [...arr].sort((a,b) => a - b).join(',')

            arr.length >= 8 ? resultSortDOM.classList.add('fs-6') : resultSortDOM.classList.add('fs-5')
            resultSortDOM.textContent = sort.toString()
        }
        // issue 4
        /**
         * интерполяция
         *
         * @type { Function }
         *
         * @return Выводим содержимое
         */
        function inter() {
            const inter = Math.random()
            resultInterDOM.textContent = inter.toString()
        }

    }

    // helper
    /**
     * выводим результат
     *
     * @type { Function }
     *
     */
    function drawResult(text) {
        if (text) {
            return resultDOM.textContent = text
        }
        resultDOM.textContent = ''
    }

    /**
     * проверка массива на наличие элементов >= 2
     *
     * @type { Function }
     *
     * @return { Boolean } заблокирована/разблокированная кнопка
     */

    function checkForBtn(arr) {
        if (arr.length >= 2) {
            console.log(btnCalcDOM.disabled)
          return btnCalcDOM.disabled = false
        } else {
            return btnCalcDOM.disabled = true
        }
    }

    /**
     * показываем результат
     *
     * @type { Function }
     *
     * @return удаляем класс hidden
     */

    function showResult() {
        resultSectionDOM.classList.remove('hidden')
    }

    /**
     * скрываем результат
     *
     * @type { Function }
     *
     * @return добавляем класс hidden
     */

    function hideResult() {
        if (!resultSectionDOM.classList.contains('hidden')) {
            resultSectionDOM.classList.add('hidden')
        }
    }
})