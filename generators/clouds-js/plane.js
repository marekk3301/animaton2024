function getRandomPointOutsideViewport(side) {
    canvasElement = document.getElementById("cloudCanvas");
    switch (side) {
        case 'left':
            return { x: -100, y: Math.random() * canvasElement.height };
        case 'right':
            return { x: canvasElement.width + 100, y: Math.random() * canvasElement.height };
        case 'top':
            return { x: Math.random() * canvasElement.width, y: -100 };
        case 'bottom':
            return { x: Math.random() * canvasElement.width, y: canvasElement.height + 100 };
        default:
            return { x: 0, y: 0 }; // Default case, shouldn't reach here
    }
}

function getRandomOppositeSide(side) {
    switch (side) {
        case 'left':
            return 'right';
        case 'right':
            return 'left';
        case 'top':
            return 'bottom';
        case 'bottom':
            return 'top';
        default:
            return ''; // Default case, shouldn't reach here
    }
}

function animateObjectBetweenPoints(object, point1, point2, duration, onComplete) {
    // Ensure the object is positioned absolutely
    object.style.position = 'absolute';

    // Set the starting position of the object to point1
    object.style.left = `${point1.x}px`;
    object.style.top = `${point1.y}px`;

    // Function to translate the object between the points
    function moveObject(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const currentX = point1.x + (point2.x - point1.x) * progress;
        const currentY = point1.y + (point2.y - point1.y) * progress;

        object.style.left = `${currentX}px`;
        object.style.top = `${currentY}px`;

        // Calculate the angle for the rotation
        const angle = Math.atan2(point2.y - point1.y, point2.x - point1.x) * (180 / Math.PI);
        object.style.transform = `rotate(${angle + 90}deg)`;

        if (progress < 1) {
            requestAnimationFrame(moveObject);
        } else {
            onComplete();
        }
    }

    let startTime;
    requestAnimationFrame(moveObject);
}

// Usage
document.addEventListener('DOMContentLoaded', () => {
    const object = document.getElementById('moving-object');

    function startAnimation() {
        const startSide = ['left', 'right', 'top', 'bottom'][Math.floor(Math.random() * 4)];
        const endSide = getRandomOppositeSide(startSide);
        const point1 = getRandomPointOutsideViewport(startSide);
        const point2 = getRandomPointOutsideViewport(endSide);
        const duration = 10000; // Duration in milliseconds

        animateObjectBetweenPoints(object, point1, point2, duration, startAnimation);
    }

    startAnimation();
});
