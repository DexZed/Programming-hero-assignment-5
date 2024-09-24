document.addEventListener("DOMContentLoaded", () => {
    const donbtn = document.getElementById("donbtn");
    const hisbtn = document.getElementById("hisbtn");
    const don = document.getElementById("donations");
    const his = document.getElementById("history");

    // Function to show donations section and hide history section
    function showDonations() {
        don.classList.remove("hidden");
        his.classList.add("hidden");
        donbtn.classList.add("bg-[#B4F461]"); 
        donbtn.classList.remove("bg-white"); 
        hisbtn.classList.add("bg-white"); 
        hisbtn.classList.remove("bg-[#B4F461]"); 
    }

    // Function to show history section and hide donations section
    function showHistory() {
        his.classList.remove("hidden");
        don.classList.add("hidden");
        hisbtn.classList.add("bg-[#B4F461]"); 
        hisbtn.classList.remove("bg-white"); 
        donbtn.classList.add("bg-white"); 
        donbtn.classList.remove("bg-[#B4F461]"); 
    }

    donbtn.addEventListener("click", showDonations);
    hisbtn.addEventListener("click", showHistory);
});

