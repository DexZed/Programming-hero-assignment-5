window.onload = function() {
    let navAmount = localStorage.getItem('balance');
    if (navAmount) {
        document.getElementById('balance').textContent = navAmount;
    }
    let feniAmount = localStorage.getItem('feni');
    if (feniAmount) {
        document.getElementById('feni').querySelector('span').textContent = feniAmount;
    }

    let noahAmount = localStorage.getItem('noah');
    if (noahAmount) {
        document.getElementById('noah').querySelector('span').textContent = noahAmount;
    }
    renderHistory();
};