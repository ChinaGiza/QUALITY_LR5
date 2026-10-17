// Функции для Unit-тестов
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const calculateTotal = (items) => {
    if (!Array.isArray(items)) throw new Error('Items must be an array');
    return items.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
};

// UI логика для E2E-тестов
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('test-btn');
        const result = document.getElementById('test-result');
        if (btn && result) {
            btn.addEventListener('click', () => {
                result.textContent = 'E2E Тест успешно пройден!';
                result.style.color = 'green';
            });
        }
    });
}