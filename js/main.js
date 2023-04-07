document.querySelector("#submit").onclick = function () {

    let text = document.querySelector("#text_id").value;


    let textArray = text.split("");
    // Выбираем случайные символы для удаления
    let char1 = Math.floor(Math.random() * textArray.length);
    textArray.splice(char1, 1);
    let char2 = Math.floor(Math.random() * textArray.length);
    textArray.splice(char2, 1);
    
    
    // Объединяем символы в строку
    let newText = textArray.join("");
    document.getElementById('output').innerHTML = newText;
}