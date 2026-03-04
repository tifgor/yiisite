// Create falling stars
function createStars() {
    const container = document.getElementById('stars-container');
    const starSymbols = ['★', '☆', '✧', '✦', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '⭐', '🌟'];
    
    for (let i = 0; i < 50; i++) { // 50 stars falling at once
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random star symbol
            star.innerHTML = starSymbols[Math.floor(Math.random() * starSymbols.length)];
            
            // Random properties
            const size = Math.random() * 30 + 10;
            star.style.fontSize = size + 'px';
            star.style.left = Math.random() * 100 + '%';
            star.style.animationDuration = (Math.random() * 5 + 3) + 's'; // 3-8 seconds
            star.style.animationDelay = Math.random() * 5 + 's';
            
            // Random colors
            const colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff6600', '#ff0000', '#00ff00'];
            star.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            container.appendChild(star);
            
            // Remove and recreate star after animation
            setTimeout(() => {
                star.remove();
                createSingleStar();
            }, (parseFloat(star.style.animationDuration) + 2) * 1000);
            
        }, i * 200); // Stagger the creation
    }
}

function createSingleStar() {
    const container = document.getElementById('stars-container');
    const starSymbols = ['★', '☆', '✧', '✦', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '⭐', '🌟'];
    
    const star = document.createElement('div');
    star.className = 'star';
    star.innerHTML = starSymbols[Math.floor(Math.random() * starSymbols.length)];
    
    const size = Math.random() * 30 + 10;
    star.style.fontSize = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = (Math.random() * 5 + 3) + 's';
    
    const colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff6600', '#ff0000', '#00ff00'];
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(star);
    
    setTimeout(() => {
        star.remove();
        createSingleStar();
    }, (parseFloat(star.style.animationDuration) + 2) * 1000);
}

window.onload = createStars;