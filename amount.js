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

    // Save the new nav amount to localStorage
    localStorage.setItem('balance', navAmount);

    // Update the corresponding div noah, feni, quota with the new amount
    let targetDiv = document.getElementById(divId);
    let currentDivAmount = parseFloat(targetDiv.querySelector('span').textContent.trim());
    currentDivAmount += inputValue;
    targetDiv.querySelector('span').textContent = currentDivAmount;

    // Save the updated amount for the div to localStorage
    localStorage.setItem(divId, currentDivAmount);

    // Get the content for the history entry (e.g., donation cause or project)
    let content = targetDiv.querySelector("h3").textContent.trim();

    // Create a new history entry object
    const newHistoryEntry = {
        amount: inputValue,
        content: content,
        time: new Date().toLocaleString()
    };

    // Retrieve existing history from localStorage or create a new array if empty
    let historyArray = JSON.parse(localStorage.getItem('history')) || [];
    historyArray.push(newHistoryEntry);

    // Save the updated history array back to localStorage
    localStorage.setItem('history', JSON.stringify(historyArray));

    // Render the history after updating it
    renderHistory();

    // Show modal and clear the input field
    document.getElementById("my_modal_5").showModal();
    inputElement.value = "";
}

// Function to render the history from localStorage
function renderHistory() {
    const historyContainer = document.getElementById("history-container");
    
    // Clear existing history entries
    historyContainer.innerHTML = '';

    // Retrieve history array from localStorage
    let historyArray = JSON.parse(localStorage.getItem('history')) || [];

    // Loop through each entry and generate the HTML structure for it
    historyArray.forEach(entry => {
        const historyEntry = document.createElement("div");
        historyEntry.className = "flex flex-col rounded-2xl w-full bg-[#ffffff] shadow-xl p-3 border-2";
        historyEntry.innerHTML = `
            <div class="flex flex-col p-8">
                <div class="text-xl font-bold text-center text-[#374151] pb-6 sm:text-start">
                    ${entry.amount} taka donated for ${entry.content}
                </div>
                <div class="text-base text-center text-[#374151] font-light sm:text-start">
                    Date: ${entry.time}
                </div>
            </div>
        `;
        historyContainer.appendChild(historyEntry);
    });

}