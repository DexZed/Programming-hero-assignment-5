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

   // New history entry
   let content = targetDiv.querySelector('h3').textContent.trim(); // Get content from the target div
    
    //New history entry HTML structure
    const historyEntry = document.createElement('div');
    historyEntry.className = "flex flex-col rounded-2xl w-full bg-[#ffffff] shadow-xl p-3 border-2";
    historyEntry.innerHTML = `
    <div class="flex flex-col p-8">
        <div class="text-xl font-bold text-center text-[#374151] pb-6">
            ${inputValue} donated for ${content}
        </div>
        <div class="text-base text-center text-[#374151] font-light">
            ${new Date().toLocaleString()}
        </div>
    </div>
    `;
    // Append the new entry to the history container
    const historyContainer = document.getElementById('history-container');
    historyContainer.appendChild(historyEntry);
    document.getElementById('my_modal_5').showModal();
}