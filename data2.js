document.addEventListener("DOMContentLoaded", function(event){  
    console.log(filteredText);
    console.log(duplicateElements);  
});

//  prueba
const testText = 'hola, esto, hola, podria, no, no, funcionar';

// crea texto en array
turnInArray = (text) => {return text = text.split(' ');}



cleanText = (text) => {
    text = text.replaceAll(',', '');
    text = text.replaceAll('.', '');
    text = text.replaceAll('!', '');
    text = text.replaceAll('?', '');
    text = text.replaceAll('\n', '');
    text = text.replaceAll('\t', '');
    return text;    
}

// texto filtrado
filteredText = turnInArray(cleanText(testText));

// palabras repetidas en el texto
toFindDuplicates = (arry) => arry.filter((item, index) => arry.indexOf(item) !== index)
duplicateElements = toFindDuplicates(filteredText);

