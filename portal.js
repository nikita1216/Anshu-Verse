document.addEventListener("DOMContentLoaded", function () {
    // Puzzle functionality
    const puzzleContainer = document.getElementById("puzzle-game");
    const gridSize = 3; // 3x3 puzzle
    let pieces = [];

    // Create puzzle pieces
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            let piece = document.createElement("div");
            piece.classList.add("puzzle-piece");
            piece.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
            piece.setAttribute("data-position", `${row}-${col}`);
            pieces.push(piece);
        }
    }

    // Shuffle function
    function shufflePieces() {
        puzzleContainer.innerHTML = "";
        let shuffled = pieces.sort(() => Math.random() - 0.5);
        shuffled.forEach(piece => puzzleContainer.appendChild(piece));
    }

    shufflePieces(); // Shuffle on load

    // Enable dragging
    let draggedPiece = null;

    puzzleContainer.addEventListener("dragstart", function (event) {
        draggedPiece = event.target;
        event.dataTransfer.setData("text/plain", draggedPiece.dataset.position);
    });

    puzzleContainer.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    puzzleContainer.addEventListener("drop", function (event) {
        event.preventDefault();
        const targetPiece = event.target;

        if (targetPiece.classList.contains("puzzle-piece") && draggedPiece !== targetPiece) {
            // Swap background positions
            let tempPosition = draggedPiece.style.backgroundPosition;
            draggedPiece.style.backgroundPosition = targetPiece.style.backgroundPosition;
            targetPiece.style.backgroundPosition = tempPosition;
        }
    });

    // Shuffle button event listener
    document.getElementById("shuffle-button").addEventListener("click", shufflePieces);

    // Scrollable image gallery functionality
    const scrollContainer = document.querySelector(".scroll-container");
    const scrollLeftBtn = document.getElementById("scroll-left");
    const scrollRightBtn = document.getElementById("scroll-right");

    scrollLeftBtn.addEventListener("click", function () {
        scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
    });

    scrollRightBtn.addEventListener("click", function () {
        scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
    });

    // Auto-scroll effect
    let scrollAmount = 0;
    function autoScroll() {
        if (scrollAmount < scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollAmount += 2;
            scrollContainer.scrollLeft = scrollAmount;
        } else {
            scrollAmount = 0;
        }
        requestAnimationFrame(autoScroll);
    }

    autoScroll(); // Start auto-scrolling
});