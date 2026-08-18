// AI Content Generator
// script.js

const generateButton = document.querySelector(".generate-btn");
const outputContent = document.querySelector(".output-content");
const outputSection = document.querySelector(".output");

// Generate content when the button is clicked
generateButton.addEventListener("click", function () {

    const prompt = document.querySelector("textarea").value.trim();

    if (prompt === "") {
        outputContent.textContent = "Please enter a topic or prompt first.";
        outputSection.style.display = "block";
        return;
    }

    // Show loading message
    outputContent.textContent = "Generating content...";
    outputSection.style.display = "block";

    // Temporary demo response
    setTimeout(function () {
        outputContent.textContent =
            "Here is your AI-generated content based on your prompt:\n\n" +
            prompt +
            "\n\nThis is a preview response. In the next step, we will connect your application to a real AI model so that it can generate actual content.";
    }, 1000);
});
