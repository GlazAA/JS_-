// 1
document.querySelector('#Task-One-Button').onclick = function(){
    let name = prompt('Введите свое имя: ');
    document.getElementById('answer-task-one').textContent = `Привет, ${name}!`;
}

// 2
document.querySelector('#Task-Two-Button').onclick = function(){
    const CURRENT_YEAR = 2025;
    let number = Number(prompt('Введите год вашего рождения: '));
    
    if(!isNaN(number)){
        let result = CURRENT_YEAR - number;
        document.getElementById('answer-task-two').textContent = `Ваш возраст: ${result}`;
    }
    else{
        document.getElementById('answer-task-two').textContent = 'Введено некорректное значение!';
    }
}

// 3
document.querySelector('#Task-Three-Button').onclick = function(){
    let len = Number(prompt('Введите длину стороны квадрата: '));
    
    if(!isNaN(len) && len > 0) {
        let P = len * 4;
        document.getElementById('answer-task-three').textContent = `Периметр квадрата со стороной ${len} = ${P}`;
    }
    else{
        document.getElementById('answer-task-three').textContent = 'Введено некорректное значение!';
    }
}

// 4
document.querySelector('#Task-Four-Button').onclick = function(){
    const PI = 3.14;
    let r = Number(prompt('Введите радиус окружности: '));
    
    if(!isNaN(r) && r > 0) {
        let S = PI * r * r;
        document.getElementById('answer-task-four').textContent = `Площадь круга с радиусом ${r} = ${S}`;
    }
    else{
        document.getElementById('answer-task-four').textContent = 'Введено некорректное значение!';
    }
}

// 5
document.querySelector('#Task-Five-Button').onclick = function(){
    let S = Number(prompt('Введите расстояние в км: '));
    let T = Number(prompt('За сколько часов он хочет добраться: '));
    
    if(!isNaN(S) && !isNaN(T) && S > 0 && T > 0) {
        let U = S / T;
        document.getElementById('answer-task-five').textContent = `Необходимая скорость: ${U.toFixed(2)} км/ч`;
    }
    else{
        document.getElementById('answer-task-five').textContent = 'Введено некорректное значение!';
    }
}