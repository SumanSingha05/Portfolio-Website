document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});

const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
