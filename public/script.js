const button = document.getElementById('changeBgButton');
        let currentImage = 1;

        button.addEventListener('click', () => {
            currentImage = currentImage === 1 ? 2 : 1; // Toggle between images
            document.body.style.backgroundImage = `url('images/${currentImage}.jpg')`;
        });