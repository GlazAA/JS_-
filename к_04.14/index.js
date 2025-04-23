// Task 1
let taskOne = document.querySelector('#answer-task-one');

document.querySelector('#Task-One-Button').onclick = function(){
    let input = prompt("Введите числа через пробел:");
    let numbers = input.split(" ").map(Number); 

    let result = calculateAverageOfPositives(numbers);
    taskOne.textContent = result !== null ? result : "Нет положительных чисел";
}

function calculateAverageOfPositives(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] > 0)
        { 
            sum += arr[i]; 
            count++; 
        }
    }

    return count > 0 ? sum / count : null; 
}

// 2
let taskTwo = document.querySelector('#answer-task-two');
document.querySelector('#Task-Two-Button').onclick = function(){
    let input = prompt("Введите числа через пробел:");
    let numbers = input.split(" ").map(Number); 

    let result = hasDuplicates(numbers);
    taskTwo.textContent = result ? "Да" : "Нет";
}

function hasDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) { 
                return true; 
            }
        }
    }
    return false; 
}

// 3
let taskThree = document.querySelector('#answer-task-three');
document.querySelector('#Task-Three-Button').onclick = function(){
    let input = prompt("Введите числа через пробел:");
    let numbers = input.split(" ").map(Number); 

    let result = countNegatives(numbers);
    taskThree.textContent = result;
}

function countNegatives(arr) 
{
    let count = 0;

    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] < 0) 
        {
            count++; 
        }
    }

    return count; 
}


