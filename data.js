window.onload = () => {

    const inputText = document.querySelector('#texto-entrada');
    const resultParent = document.querySelector('#resultados');


    const cleanWords = (string, regex, spacing) => {
        const arr = string
            .replace(regex, '')
            .toLowerCase()
            .split(spacing)
            .sort()
            .filter(value => value != '')
        return arr;
    }


    const countLetter = (letters) => {
        let counts = {};
        letters.forEach((letter) => {
            counts[letter] = (counts[letter] || 0) + 1;
        })
        return counts;
    }

    // resultado de letras al DOM
    const setResultOfLetters = (results, node) => {
        for (const result in results) {
            node.insertAdjacentHTML('beforeend',
            `<p>
                <strong>Letra: ${result} </strong>
                <span> Cantidad: ${results[result]}</span>
            </p>`)
        }
    }

    //resultado de palabras al DOM
    const setResultOfWords = (results, node) => {
        for (const result in results) {
            node.insertAdjacentHTML('beforeend',
            `<p>
                <strong>Palabra: ${result} </strong>
                <span> Cantidad: ${results[result]}</span>
            </p>`)
        }
    }

    // array de letras
    const letters = cleanWords(inputText.textContent, /[^A-Za-z]\s*/g, '');
    const words = cleanWords(inputText.textContent, /[^A-Za-z]\s/g, ' ' );

    // Inserta el resultado 
    setResultOfLetters(countLetter(letters), resultParent);
    setResultOfWords(countLetter(words), resultParent);
}
