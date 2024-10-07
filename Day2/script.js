document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (validateCardNumber(cardNumber) && validateExpiryDate(expiryDate) && validateCVV(cvv)) {
        alert('Payment successful!');
    } else {
        alert('Please check your card details.');
    }
});

// Format the credit card number input
document.getElementById('card-number').addEventListener('input', function (event) {
    let value = event.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = '';
    for (let i = 0; i < value.length; i += 4) {
        formattedValue += value.substr(i, 4) + ' ';
    }
    event.target.value = formattedValue.trim();
});

// Format the expiry date input
document.getElementById('expiry-date').addEventListener('input', function (event) {
    let value = event.target.value.replace(/[^0-9]/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    event.target.value = value;
});

function validateCardNumber(cardNumber) {
    const regex = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
    return regex.test(cardNumber);
}

function validateExpiryDate(expiryDate) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return regex.test(expiryDate);
}

function validateCVV(cvv) {
    const regex = /^[0-9]{3}$/;
    return regex.test(cvv);
}
