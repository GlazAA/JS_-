// 1. Рекурсивное возведение в степень
document.getElementById('power-btn').addEventListener('click', () => {
    const base = Number(prompt('Введите число:'));
    const exponent = Number(prompt('Введите степень:'));
    
    function power(b, e) {
        if (e === 0) return 1;
        if (e < 0) return 1 / power(b, -e);
        return b * power(b, e - 1);
    }
    
    const result = !isNaN(base) && !isNaN(exponent) 
        ? `${base}^${exponent} = ${power(base, exponent)}` 
        : 'Ошибка ввода!';
    
    document.getElementById('power-result').textContent = result;
});

// 2. Рекурсивный поиск НОД (алгоритм Евклида)
document.getElementById('gcd-btn').addEventListener('click', () => {
    const a = Number(prompt('Введите первое число:'));
    const b = Number(prompt('Введите второе число:'));
    
    function gcd(x, y) {
        if (y === 0) return Math.abs(x);
        return gcd(y, x % y);
    }
    
    const result = !isNaN(a) && !isNaN(b) 
        ? `НОД(${a}, ${b}) = ${gcd(a, b)}` 
        : 'Ошибка ввода!';
    
    document.getElementById('gcd-result').textContent = result;
});

// 3. Рекурсивный поиск максимальной цифры в числе
document.getElementById('max-digit-btn').addEventListener('click', () => {
    const numStr = prompt('Введите число:');
    const num = Number(numStr);
    
    function maxDigit(n, currentMax = 0) {
        if (n < 10) return Math.max(n, currentMax);
        const digit = n % 10;
        return maxDigit(Math.floor(n / 10), Math.max(digit, currentMax));
    }
    
    const result = !isNaN(num) 
        ? `Максимальная цифра в ${num}: ${maxDigit(Math.abs(num))}` 
        : 'Ошибка ввода!';
    
    document.getElementById('max-digit-result').textContent = result;
});

// 4. Рекурсивная проверка на простое число
document.getElementById('prime-btn').addEventListener('click', () => {
    const num = Number(prompt('Введите число для проверки:'));
    
    function isPrime(n, divisor = 2) {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % divisor === 0) return false;
        if (divisor * divisor > n) return true;
        return isPrime(n, divisor + 1);
    }
    
    const result = !isNaN(num) 
        ? `${num} - ${isPrime(num) ? 'простое' : 'составное'} число` 
        : 'Ошибка ввода!';
    
    document.getElementById('prime-result').textContent = result;
});