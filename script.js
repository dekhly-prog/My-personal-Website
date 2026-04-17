/* Wait until page fully loads */
document.addEventListener("DOMContentLoaded", function () {

    console.log("Website loaded successfully!");

    // Button click example
    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", function () {
            alert("Thanks for Exploring");
        });
    }

});
