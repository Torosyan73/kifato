const counters = document.querySelectorAll('.number__num');
const duration = 2000;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);

            counter.innerText = value.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        requestAnimationFrame(update);
    });
};

const statsSection = document.getElementById('numbers__list');
let hasAnimated = false;

window.addEventListener('scroll', () => {
    const sectionTop = statsSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint && !hasAnimated) {
        animateCounters();
        hasAnimated = true;
    }
});

