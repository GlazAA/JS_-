document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('Task-One-Button').addEventListener('click', showShoppingList);
    document.getElementById('Task-Two-Button').addEventListener('click', addProduct);
    document.getElementById('Task-Three-Button').addEventListener('click', markAsBought);
});

// Исходный список продуктов с русскими названиями фруктов
const shoppingList = [
    {name: "яблоки", count: 5, isBought: false}, 
    {name: "бананы", count: 3, isBought: true}, 
    {name: "персики", count: 10, isBought: false},
    {name: "апельсины", count: 7, isBought: false},
    {name: "груши", count: 4, isBought: true}
];

// Функция для сортировки списка (сначала некупленные)
function sortShoppingList(list) {
    return [...list].sort((a, b) => a.isBought - b.isBought);
}

// Функция добавления продукта
function addProductToList(name, count) {
    const existingProduct = shoppingList.find(item => item.name.toLowerCase() === name.toLowerCase());
    
    if (existingProduct) {
        existingProduct.count += count;
        return `Количество "${name}" увеличено на ${count}`;
    } else {
        shoppingList.push({
            name: name,
            count: count,
            isBought: false
        });
        return `"${name}" добавлен в список`;
    }
}

// Функция отметки продукта как купленного
function buyProduct(productName) {
    const product = shoppingList.find(item => 
        item.name.toLowerCase() === productName.toLowerCase()
    );
    
    if (product) {
        product.isBought = true;
        return `"${productName}" отмечен как купленный`;
    } else {
        return `"${productName}" не найден в списке`;
    }
}

// Обработчики для кнопок
function showShoppingList() {
    const sortedList = sortShoppingList(shoppingList);
    const answerElement = document.getElementById('answer-task-one');
    
    answerElement.innerHTML = "<h3>Ваш список покупок:</h3>";
    sortedList.forEach(item => {
        const status = item.isBought ? "✓ Куплено" : "✗ Не куплено";
        answerElement.innerHTML += 
            `<p>${item.name} - ${item.count} шт. (${status})</p>`;
    });
}

function addProduct() {
    const nameInput = document.getElementById('product-name');
    const countInput = document.getElementById('product-count');
    const name = nameInput.value.trim();
    const count = parseInt(countInput.value);
    
    if (name && count > 0) {
        const message = addProductToList(name, count);
        document.getElementById('answer-task-two').textContent = message;
        nameInput.value = '';
        countInput.value = '';
    } else {
        document.getElementById('answer-task-two').textContent = 
            "Введите корректные данные!";
    }
}

function markAsBought() {
    const productName = document.getElementById('product-to-buy').value.trim();
    
    if (productName) {
        const message = buyProduct(productName);
        document.getElementById('answer-task-three').textContent = message;
        document.getElementById('product-to-buy').value = '';
    } else {
        document.getElementById('answer-task-three').textContent = 
            "Введите название продукта!";
    }
}