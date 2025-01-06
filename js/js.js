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

const form = document.getElementById('form');
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

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

sections.forEach(section => observer.observe(section));

const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

    