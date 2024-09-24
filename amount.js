// Capture the amount from the element
function getAmountFromNav() {
    const navElement = document.querySelector('.navbar-end .btn'); // Select the 'a' element
    const textContent = navElement.childNodes[1].textContent; // Get the text node containing '500'
    
    // Extract the number from the text
    const amount = parseFloat(textContent);

    if (!isNaN(amount)) {
        return amount; // Return the number
    } else {
        console.error("Couldn't parse amount");
        return 0; // Fallback in case there's an error
    }
}

// Example usage
// const balance = getAmountFromNav();
// console.log("Captured amount:", balance);