document.addEventListener('DOMContentLoaded', (event) => {
    const buyButton = document.querySelector('button[type="button"]');
    const sizeSelect = document.getElementById('size');

    buyButton.addEventListener('click', () => {
        const selectedSize = sizeSelect.options[sizeSelect.selectedIndex].text;
        if (selectedSize === "other") {
            const userInput = prompt("Please enter your desired size in cubic feet:");
            // Handle the user input here
        } else {
            alert(`You have selected: ${selectedSize}`);
        }

        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ size: selectedSize, userInput: userInput }),
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});

