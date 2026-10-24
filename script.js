document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("destination-search");
    const cards = document.querySelectorAll("#destination-list .package-card");
    const clearButton = document.getElementById("clear-search");
    const message = document.getElementById("search-message");

    if (!searchBox || !clearButton || !message || cards.length === 0) {
       
        return;
    }

    function searchDestinations() {
        const searchText = searchBox.value.trim().toLowerCase();
        let count = 0;

        cards.forEach(function (card) {
            const heading = card.querySelector("h3");
            const description = card.querySelector(".package-info");

            const name = heading ? heading.textContent.toLowerCase() : "";
            const info = description ? description.textContent.toLowerCase() : "";

            if (name.includes(searchText) || info.includes(searchText)) {
                card.style.display = "";
                count++;
            } else {
                card.style.display = "none";
            }
        });

        if (searchText === "") {
            message.textContent = "";
        } else if (count === 0) {
            message.textContent = "No destinations found.";
        } else {
            message.textContent = count + " destination(s) found.";
        }
    }

    searchBox.addEventListener("input", searchDestinations);

    clearButton.addEventListener("click", function () {
        searchBox.value = "";
        searchDestinations();
    });

    const params = new URLSearchParams(window.location.search);
    const destination = params.get("destination");

    if (destination) {
        searchBox.value = destination;
        searchDestinations();
    }
});

// PACKAGE SEARCH
document.addEventListener("DOMContentLoaded", function () {

    const searchBox = document.getElementById("package-search");
    const cards = document.querySelectorAll("#package-list .package-card");
    const clearButton = document.getElementById("clear-package-search");
    const message = document.getElementById("package-search-message");

    if (!searchBox || !clearButton || !message || cards.length === 0) {
        return;
    }

    function searchPackages() {

        const searchText = searchBox.value.trim().toLowerCase();
        let count = 0;

        cards.forEach(function (card) {

            const name = card.querySelector("h3").textContent.toLowerCase();
            const details = card.querySelectorAll(".package-info");

            let packageDetails = "";

            details.forEach(function (detail) {
                packageDetails += " " + detail.textContent.toLowerCase();
            });

            if (name.includes(searchText) || packageDetails.includes(searchText)) {
                card.style.display = "";
                count++;
            } else {
                card.style.display = "none";
            }

        });

        if (searchText === "") {
            message.textContent = "";
        } else if (count === 0) {
            message.textContent = "No packages found.";
        } else {
            message.textContent = count + " package(s) found.";
        }
    }

    searchBox.addEventListener("input", searchPackages);

    clearButton.addEventListener("click", function () {
        searchBox.value = "";
        searchPackages();
    });

});

// CONTACT FORM VALIDATION
// CONTACT FORM VALIDATION
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");

    if (!form) {
        return;
    }

    const name = document.getElementById("contact-name");
    const destination = document.getElementById("contact-destination");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (!name || !destination || !formMessage) {
            alert("Please check the contact form HTML IDs.");
            return;
        }

        formMessage.textContent =
            "Thank you, " + name.value.trim() +
            "! Your enquiry for " + destination.value +
            " has been submitted successfully.";

        formMessage.style.color = "green";
        formMessage.style.marginTop = "15px";

        form.reset();

    });

});