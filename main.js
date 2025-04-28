const button = document.getElementById('submit-btn');
button.addEventListener('click', () => {
    window.location.href = './thankyou.html';
    console.log('Button clicked! Redirecting to thank you page...');
})