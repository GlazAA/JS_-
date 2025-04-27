document.addEventListener("DOMContentLoaded", ()=>{//обработчик загрузки страницы
    document.getElementById('Task-One-Button').addEventListener('click', task1);
    document.getElementById('Task-Two-Button').addEventListener('click', task2);
    document.getElementById('Task-Three-Button').addEventListener('click', task3);
    document.getElementById('Task-Four-Button').addEventListener('click', task4);
    document.getElementById('Task-Five-Button').addEventListener('click', task5);
})



function strStatistic(string){
    let letters = 0;
    let numbers = 0;
    let spec = 0;

    for(let i = 0; i < string.length; i++){
        if ((string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) || (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)){
            letters++;
        }else if((string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57)){
            numbers++;
        }else{
            spec++
        }
    }
    return {letters:letters, numbers: numbers, spec: spec}
}

function convertIntoWords(number){
    const words10_20 = ["Десять","Одиннадцать","Двенадцать","Тринадцать","Четырнадцать","Пятнадцать","Шестнадцать","Семнадцать","Восемнадцать","Девятнадцать"];

    const decimals = ["Двадцать","Тридцать","Сорок","Пятьдесят","Шестьдесят","Семьдесят","Восемьдесят","Девяносто"];

    const units = ["","один","два","три","четыре","пять","шесть","семь","восемь","девять",];

    if(!isNaN(number)&&(number >= 10 && number <= 99)){
        if(number >= 10 && number <= 19){
            return words10_20[number%10];
        }else{
            return decimals[Math.floor((number/10))-2] + units[number%10];
        }
    }else{
        return "Неверный ввод";
    }
}

function reverseRegister(string){
    let answer = "";
    for(let i = 0; i < string.length; i++){
        if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
            //большие символы в маленькие
            answer += String.fromCharCode((string.charCodeAt(i)+32));
        }else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
            //маленькие символы в большие
            answer += String.fromCharCode((string.charCodeAt(i)-32));
        }else if(string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57){
            //цифры в _
            answer += "_";
        }else{
            answer += string[i];
        }
    }
    return answer;
}

function toCamelCase(string){
    string = string.trim();
    let camelCase = "";
    for(let i = 0; i < string.length; i++){
        if(string[i] == "-"){
            camelCase += string[i+1].toUpperCase();
            i++;
        }else{
            camelCase += string[i]
        }
    }
    return camelCase;
}

function createAbbreviation(string){
    //убираем лишние пробелы если есть
    string = string.replace(/ +/g, ' ').trim();

    let abbreviation = "";
    abbreviation += string[0].toUpperCase();
    for(let i = 0; i < string.length; i++){
        if(string[i] == " "){
            abbreviation += string[i+1].toUpperCase();
        }
    }

    return abbreviation;
}

function task1(){
    const answerTaskOne = document.getElementById('answer-task-one');
    let str = prompt("Введите строку");
    let answer = strStatistic(str);

    answerTaskOne.innerHTML += `<br>количество букв: ${answer.letters}<br>количество цифр: ${answer.numbers}<br>количество спец-символов: ${answer.spec}`;
}

function task2(){
    const answerTaskTwo = document.getElementById('answer-task-two');

    let number = prompt("Введите двухзначное число");
    answerTaskTwo.innerHTML = `Ваше число: ${convertIntoWords(number)}`;
}

function task3(){
    const answerTaskThree = document.getElementById('answer-task-three');

    let str = prompt("Введите строку");
    answerTaskThree.innerHTML = `Ваша строка: ${reverseRegister(str)}`;
}

function task4(){
    const answerTaskFour = document.getElementById('answer-task-four');

    let str = prompt("Введите строку");
    answerTaskFour.innerHTML = `Ваш CamelCase: ${toCamelCase(str)}`;
}

function task5(){
    const answerTaskFive = document.getElementById('answer-task-five');

    let str = prompt("Введите строку");
    answerTaskFive.innerHTML = `Ваша аббревеатура: ${createAbbreviation(str)}`;
}