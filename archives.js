document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "Baba knows everything, but I’ll still argue with him like I know better.",
        "If life is a blank canvas, I’m out here painting a masterpiece… or at least a very colorful mess.",
        "Valorant isn’t just a game; it’s where I make strategic life decisions… like whether to clutch or blame lag.",
        "Flowers? Check. Chocolates? Check. Late-night rants? Check. Making her feel special? Always.",
        "I fall asleep faster than she loses her temper… and that’s saying something.",
        "She thinks I send flowers to impress her. Joke’s on her—I just love seeing her smile."
    ];

    function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote-display").textContent = quotes[randomIndex];
    }

    document.querySelector("button").addEventListener("click", generateQuote);
});