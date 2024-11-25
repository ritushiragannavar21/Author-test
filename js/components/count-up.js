
export default () => {
    const targetElements = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }); 

    targetElements.forEach(element => observer.observe(element));

    function startCounting(element) {
        const targetCount = parseInt(element.getAttribute('data-count'), 10);
        let range = {min: 1, max: targetCount}
            let delta = range.max - range.min
            var increment = Math.round(range.min + Math.random() * delta)
        const randomDuration = 2000;
        const randomInterval = setInterval(() => {
            let range = {min: 10, max: targetCount}
                let delta = range.max - range.min
            element.textContent = formatNumber(Math.round(range.min + Math.random() * delta));
        }, 30);

        setTimeout(() => {
            clearInterval(randomInterval);
            let currentCount = 0;
            const interval = setInterval(() => {
                currentCount += increment;
                if (currentCount >= targetCount) {
                    currentCount = targetCount;
                    clearInterval(interval);
                }
                element.textContent = formatNumber(currentCount);
            }, 30);

        }, randomDuration);
    }

    function formatNumber(number) {
        return number < 10 ? `0${number}` : number;
    }
};




