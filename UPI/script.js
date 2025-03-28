// script.js
function processPayment() {
    const upiId = document.getElementById('upiId').value;
    if (upiId) {
        setTimeout(() => {
            document.getElementById('message').textContent = "";
            showSuccess();
            document.getElementById('transactionDetails').textContent = "Transaction ID: " + Math.floor(Math.random() * 1000000);
        }, 1000);
    } else {
        document.getElementById('message').textContent = "Please enter a UPI ID.";
    }
}

function showSuccess() {
    const successContainer = document.createElement('div');
    successContainer.className = 'success-container'; // Apply the class
    successContainer.id = 'successContainer';
    successContainer.innerHTML = `
        <h1>Payment Successful!</h1>
        <p>Your payment has been processed successfully.</p>
        <p id="transactionDetails"></p>
        <button onclick="goToHome()">Go to Home</button>
    `;
    document.body.appendChild(successContainer);
}

function goToHome() {
    const successContainer = document.getElementById('successContainer');
    successContainer.remove();
    document.getElementById('upiId').value = "";
    document.getElementById('message').textContent = "";
}