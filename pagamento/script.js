document.addEventListener('DOMContentLoaded', function() {
    const paymentMethods = document.getElementsByName('paymentMethod');
    const paymentDetails = document.getElementsByClassName('payment-details');

    for (let i = 0; i < paymentMethods.length; i++) {
        paymentMethods[i].addEventListener('change', function() {
            for (let j = 0; j < paymentDetails.length; j++) {
                paymentDetails[j].style.display = 'none';
            }
            document.getElementById(this.value + 'Details').style.display = 'block';
        });
    }
});

