document.addEventListener("DOMContentLoaded", () => {
    const flipFlop = document.getElementById("flipFlop");
    const donations = document.getElementById("donations");
    const blog = document.getElementById("blog");
    const pain = document.getElementById("pain");
    const donbtn = document.getElementById("donbtn");
    const hisbtn = document.getElementById("hisbtn");
    const his = document.getElementById("history");
    
   

    flipFlop.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default anchor behavior

        // Toggle visibility 
        if (blog.classList.contains("hidden")) {
            blog.classList.remove("hidden"); 
            donations.classList.add("hidden"); 
            flipFlop.textContent = "Home"; 
            pain.classList.add("hidden");
            his.classList.add("hidden");
           
        } else {
            blog.classList.add("hidden"); 
            donations.classList.remove("hidden"); 
            flipFlop.textContent = "Blog";
            pain.classList.remove("hidden"); 
            donbtn.classList.add("bg-[#B4F461]"); 
        donbtn.classList.remove("bg-white"); 
        hisbtn.classList.add("bg-white"); 
        hisbtn.classList.remove("bg-[#B4F461]"); 
           
        }
    });
});
