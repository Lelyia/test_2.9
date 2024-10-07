let count = 0;
const button = document.getElementById("click-button");
const counterDisplay = document.getElementById("counter");

function updateCount() {
    counterDisplay.textContent = count;
}
button.addEventListener("click", () => {
    count++;
    updateCount();
});

const emailInput = document.getElementById("email"); // найдите элементы с помощью getElement или аналогии
    const errorMessage = document.getElementById("error-message");
        const submitBtn = document.getElementById("submit-btn");
            emailInput.addEventListener('input', function () {
                const emailValue = emailInput.value;
                // Пример простого регулярного выражения для проверки email
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailValue)) {
                    // Отобразите сообщение об ошибке и заблокируйте кнопку
                    errorMessage.style.display = "block";
                    submitBtn.disabled = true;
                } else {
                    // Скрывайте сообщение об ошибке и разблокируйте кнопку
                    errorMessage.style.display = "none";
                    submitBtn.disabled = false;
                }
            });