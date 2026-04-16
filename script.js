document.addEventListener('DOMContentLoaded', () => {
    const patientForm = document.getElementById('patientForm');
    
    if (patientForm) {
        patientForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(patientForm);
            const data = {};
            formData.forEach((value, key) => {
                if (!data[key]) {
                    data[key] = value;
                } else {
                    if (!Array.isArray(data[key])) {
                        data[key] = [data[key]];
                    }
                    data[key].push(value);
                }
            });
            
            alert('تم إرسال بياناتك بنجاح! سنتواصل معك قريباً.');
            patientForm.reset();
            console.log('Patient Data:', data);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.08)';
            }
        });
    }
});
