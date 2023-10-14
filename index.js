const sections = document.querySelectorAll('section');
const scrollDownButton = document.querySelector('.arrow-down-container');

sections.forEach((section, index) => {
    section.addEventListener('wheel', (event) => {
        if (event.deltaY > 0 && index < sections.length - 1) {
            const nextSection = sections[index + 1];
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
                if (index === 0) {
                    scrollDownButton.style.transition = 'opacity 0.5s';
                    scrollDownButton.style.opacity = 0;
                    setTimeout(() => {
                        scrollDownButton.style.display = 'none';
                    }, 500);
                }
            }
        } else if (event.deltaY < 0 && index > 0) {
            const prevSection = sections[index - 1];
            if (prevSection) {
                prevSection.scrollIntoView({ behavior: 'smooth' });
                if (index === 1) {
                    scrollDownButton.style.transition = 'opacity 0.5s';
                    scrollDownButton.style.display = 'block';
                    setTimeout(() => {
                        scrollDownButton.style.opacity = 1;
                    }, 50);
                }
            }
        }
    });
});

scrollDownButton.addEventListener('click', () => {
    const nextSection = sections[1];
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
        scrollDownButton.style.transition = 'opacity 0.5s';
        scrollDownButton.style.opacity = 0;
        setTimeout(() => {
            scrollDownButton.style.display = 'none';
        }, 500);
    }
});



function scrollCarousel() {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const cardsContainer = document.querySelector('.cards-container')
    const scrollWidth = 403;

    function scrollLeft () {
        console.log('scroll left')
        cardsContainer.scrollBy(-scrollWidth, 0)
    }

    function scrollRight () {
        cardsContainer.scrollBy(scrollWidth, 0)
    }

    leftArrow.addEventListener('click', scrollLeft);
    rightArrow.addEventListener('click', scrollRight);
}

scrollCarousel()