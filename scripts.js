// Redirect to the payment page when the subscribe button is clicked
document.getElementById('subscribeButton').addEventListener('click', function() {
    window.location.href = 'payment.html'; // Redirect to payment page
});

// Handle form submission on the payment page
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const nameOnCard = document.getElementById('nameOnCard').value;

    // Simple validation
    if (!cardNumber || !expiryDate || !cvv || !nameOnCard) {
        alert('Please fill in all fields!');
        return;
    }

    // Placeholder for actual payment processing (e.g., using Stripe API)
    alert('Payment details submitted successfully!');
});
