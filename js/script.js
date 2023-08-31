const carouselContainer = document.querySelector(".carousel-container");
const carouselSlides = document.querySelectorAll(".carousel-slide");

let currentIndex = 0;

function updateSlidePosition() {
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    updateSlidePosition();
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

updateSlidePosition(); // Initial position

const inputForm = document.getElementById("input-form");
const outputContainer = document.querySelector(".output-cards");
const welcomeMessage = document.getElementById("welcome-message");

inputForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);

    // Create an output card element
    const outputCard = document.createElement("div");
    outputCard.className = "output-card";

    // Get current date and time (Indonesian Time)
    const now = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Asia/Jakarta",
    };
    const formattedDate = now.toLocaleDateString("id-ID", options);

    // Create the HTML content for the output card
    const outputHTML = `
        <p>${formattedDate}</p>
        <p><strong>Nama:</strong> ${formData.get("nama")}</p>
        <p><strong>Tanggal:</strong> ${formData.get("tanggal")}</p>
        <p><strong>Jenis Kelamin:</strong> ${formData.get("jenis-kelamin")}</p>
        <p><strong>Pesan:</strong> ${formData.get("pesan")}</p>
    `;

    // Set the HTML content to the output card
    outputCard.innerHTML = outputHTML;

    // Clear the previous output
    outputContainer.innerHTML = "";

    // Append the output card to the output container
    outputContainer.appendChild(outputCard);

    // Update the welcome message with the entered name
    welcomeMessage.textContent = `Welcome, ${formData.get("nama")}!`;

    // Clear the form fields
    inputForm.reset();
});
