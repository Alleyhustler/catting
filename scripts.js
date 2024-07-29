document.addEventListener("DOMContentLoaded", function() {
    const poppingImagesContainer = document.getElementById('popping-images-container');
    const imageSrc = 'images/king cat.jpg'; // Path to your image

    function createPoppingImage() {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.style.top = `${Math.random() * window.innerHeight}px`;
        img.style.left = `${Math.random() * window.innerWidth}px`;
        poppingImagesContainer.appendChild(img);

        // Remove the image after the animation ends to prevent too many elements
        img.addEventListener('animationend', () => {
            poppingImagesContainer.removeChild(img);
        });
    }

    // Create a new popping image every 1 second
    setInterval(createPoppingImage, 1000);
});