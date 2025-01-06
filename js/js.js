document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Back to top button
        const backToTopButton = document.createElement('button');
        backToTopButton.textContent = 'Top';
        backToTopButton.style.position = 'fixed';
        backToTopButton.style.bottom = '20px';
        backToTopButton.style.right = '20px';
        backToTopButton.style.display = 'none';
        backToTopButton.style.padding = '10px';
        backToTopButton.style.backgroundColor = '#4CAF50';
        backToTopButton.style.color = 'white';
        backToTopButton.style.border = 'none';
        backToTopButton.style.borderRadius = '5px';
        backToTopButton.style.cursor = 'pointer';
        document.body.appendChild(backToTopButton);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Get the values entered in the form fields
      const name = form.elements.name.value;
      const email = form.elements.email.value;
      const message = form.elements.message.value;

      // Check if the required fields are filled
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Form is valid, do something here (e.g. send form data to a server)
      alert('Form submitted successfully!');
    });

// filepath: /C:/Users/admin/Desktop/assets/js/js.js
const toggleSwitch = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);

    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});    