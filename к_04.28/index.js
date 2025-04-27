// 1. Разница между датами
document.querySelector('#Task-One-Button').onclick = function() {
    const date1 = new Date(prompt("Введите первую дату (YYYY-MM-DD):"));
    const date2 = new Date(prompt("Введите вторую дату (YYYY-MM-DD):"));
    const diff = getDaysBetweenDates(date1, date2);
    document.querySelector('#answer-task-one').textContent = `Разница: ${diff} дней`;
};

function getDaysBetweenDates(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// 2. Форматирование даты
document.querySelector('#Task-Two-Button').onclick = function() {
    const date = new Date(prompt("Введите дату (YYYY-MM-DD):"));
    const format = prompt("Введите формат (YYYY-MM-DD, DD/MM/YYYY или MM-DD-YYYY):");
    const formatted = formatDate(date, format);
    document.querySelector('#answer-task-two').textContent = `Форматированная дата: ${formatted}`;
};

function formatDate(date, format) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day);
}

// 3. Добавление дней к дате
document.querySelector('#Task-Three-Button').onclick = function() {
    const date = new Date(prompt("Введите дату (YYYY-MM-DD):"));
    const days = Number(prompt("Введите количество дней для добавления:"));
    const newDate = addDays(date, days);
    document.querySelector('#answer-task-three').textContent = `Новая дата: ${newDate.toLocaleDateString()}`;
};

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// 4. Определение дня недели
document.querySelector('#Task-Four-Button').onclick = function() {
    const date = new Date(prompt("Введите дату (YYYY-MM-DD):"));
    const locale = prompt("Введите язык (ru или en):");
    const weekday = getWeekdayName(date, locale);
    document.querySelector('#answer-task-four').textContent = `День недели: ${weekday}`;
};

function getWeekdayName(date, locale) {
    return date.toLocaleDateString(locale, { weekday: 'long' });
}

// 5. Проверка високосного года
document.querySelector('#Task-Five-Button').onclick = function() {
    const year = Number(prompt("Введите год:"));
    const isLeap = isLeapYear(year);
    document.querySelector('#answer-task-five').textContent = 
        `${year} год - ${isLeap ? 'високосный' : 'не високосный'}`;
};

function isLeapYear(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}