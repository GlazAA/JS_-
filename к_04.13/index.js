// Задача 1: Определение возрастной категории
const ageResult = document.querySelector('#answer-task-one');
document.querySelector('#Task-One-Button').addEventListener('click', () => {
    const ageInput = prompt('Пожалуйста, введите ваш возраст:');
    const age = Number(ageInput);
    
    if (isNaN(age) || age < 0) {
        ageResult.textContent = 'Введено некорректное значение возраста!';
        return;
    }

    let category;
    if (age <= 11) category = 'ребенком';
    else if (age <= 18) category = 'подростком';
    else if (age <= 60) category = 'взрослым';
    else category = 'пенсионером';

    ageResult.textContent = `Вы являетесь ${category}`;
});

// Задача 2: Специальные символы
const symbolResult = document.querySelector('#answer-task-two');
document.querySelector('#Task-Two-Button').addEventListener('click', () => {
    const symbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];
    const numInput = prompt('Введите цифру от 0 до 9:');
    const num = Number(numInput);
    
    if (isNaN(num) || num < 0 || num > 9) {
        symbolResult.textContent = 'Необходимо ввести цифру от 0 до 9!';
        return;
    }

    symbolResult.textContent = `Символ для цифры ${num}: ${symbols[num]}`;
});

// Задача 3: Повторяющиеся цифры
const digitsResult = document.querySelector('#answer-task-three');
document.querySelector('#Task-Three-Button').addEventListener('click', () => {
    const numInput = prompt('Введите трехзначное число:');
    
    if (!/^\d{3}$/.test(numInput)) {
        digitsResult.textContent = 'Пожалуйста, введите ровно 3 цифры!';
        return;
    }

    const digits = numInput.split('');
    const uniqueDigits = new Set(digits);
    
    digitsResult.textContent = uniqueDigits.size < 3 
        ? 'В числе есть повторяющиеся цифры' 
        : 'Все цифры уникальны';
});

// Задача 4: Високосный год
const yearResult = document.querySelector('#answer-task-four');
document.querySelector('#Task-Four-Button').addEventListener('click', () => {
    const yearInput = prompt('Введите год для проверки:');
    const year = Number(yearInput);
    
    if (isNaN(year)) {
        yearResult.textContent = 'Необходимо ввести числовое значение!';
        return;
    }

    const isLeap = (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
    yearResult.textContent = `${year} год ${isLeap ? 'високосный' : 'не високосный'}`;
});

// Задача 5: Проверка палиндрома
const palindromeResult = document.querySelector('#answer-task-five');
document.querySelector('#Task-Five-Button').addEventListener('click', () => {
    const numInput = prompt('Введите пятизначное число:');
    
    if (!/^\d{5}$/.test(numInput)) {
        palindromeResult.textContent = 'Требуется ровно 5 цифр!';
        return;
    }

    const isPalindrome = numInput === numInput.split('').reverse().join('');
    palindromeResult.textContent = `Число ${isPalindrome ? 'является' : 'не является'} палиндромом`;
});