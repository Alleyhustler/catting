const cat = document.getElementById('cat');
const container = document.getElementById('container');

let catX = 0;
let catY = 0;
let velocityX = 4; // Increased speed of movement in X direction
let velocityY = 4; // Increased speed of movement in Y direction

function update() {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const catWidth = cat.clientWidth;
    const catHeight = cat.clientHeight;

    // Log current position and velocities for debugging
    console.log(`Cat Position - X: ${catX}, Y: ${catY}`);
    console.log(`Velocity - X: ${velocityX}, Y: ${velocityY}`);

    // Change direction if the cat hits the container's edges
    if (catX + catWidth >= containerWidth || catX <= 0) {
        velocityX *= -1;
    }

    if (catY + catHeight >= containerHeight || catY <= 0) {
        velocityY *= -1;
    }

    // Update the position
    catX += velocityX;
    catY += velocityY;

    // Apply the new position
    cat.style.left = `${catX}px`;
    cat.style.top = `${catY}px`;

    // Call the update function on the next frame
    requestAnimationFrame(update);
}

// Set initial position and ensure the image is loaded before starting the animation
cat.onload = () => {
    // Center the cat initially
    catX = (container.clientWidth - cat.clientWidth) / 2;
    catY = (container.clientHeight - cat.clientHeight) / 2;
    update();
};

// For immediate start in case the image is already loaded
if (cat.complete) {
    cat.onload();
}
