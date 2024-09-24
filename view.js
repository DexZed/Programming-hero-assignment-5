document.addEventListener("DOMContentLoaded", () => {
    const flipFlop = document.getElementById("flipFlop");
    const donations = document.getElementById("donations");
    const blog = document.getElementById("blog");
    const pain = document.getElementById("pain");

    flipFlop.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default anchor behavior

        // Toggle visibility 
        if (blog.classList.contains("hidden")) {
            blog.classList.remove("hidden"); 
            donations.classList.add("hidden"); 
            flipFlop.textContent = "Home"; 
            pain.classList.add("hidden");
        } else {
            blog.classList.add("hidden"); 
            donations.classList.remove("hidden"); 
            flipFlop.textContent = "Blog";
            pain.classList.remove("hidden"); 
        }
    });
});
