document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});

// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll("section");
//     sections.forEach((section) => {
//         section.classList.add("visible");
//     });
// });
