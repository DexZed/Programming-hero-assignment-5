function updateAmount(divId, inputId) {
    // Get the input value
    let inputElement = document.getElementById(inputId);
    
    if (!inputElement) {
        console.error(`Input element with id ${inputId} not found.`);
        return;
    }

    let inputValue = parseFloat(inputElement.value);

    if (isNaN(inputValue) || inputValue <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    // Get the current amount from the nav span
    let navElement = document.getElementById('balance');
    let navAmount = parseFloat(navElement.textContent.trim());

    // Subtract the input value from the nav amount
    if (navAmount < inputValue) {
        alert('Not enough funds');
        return;
    }
    navAmount -= inputValue;
    navElement.textContent = navAmount;

    // Update the corresponding div noah,feni,quota with the new amount
    let targetDiv = document.getElementById(divId);
    let currentDivAmount = parseFloat(targetDiv.querySelector('span').textContent.trim());
    currentDivAmount += inputValue;
    targetDiv.querySelector('span').textContent = currentDivAmount;
    document.getElementById('my_modal_5').showModal();
}
// Modal display function

