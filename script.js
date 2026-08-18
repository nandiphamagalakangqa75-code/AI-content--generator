// ==========================================
// NandiGen AI - Prompt Library
// ==========================================

// Prompt library containing reusable AI instructions
const promptLibrary = {

    blog: {
        name: "Blog Post",
        prompt: (topic) => `
Write a clear, engaging and informative blog post about:

"${topic}"

Requirements:
- Create an engaging title.
- Write an introduction.
- Use clear headings and paragraphs.
- Explain the topic in an easy-to-understand way.
- Include practical examples where appropriate.
- End with a useful conclusion.
- Use a professional but friendly tone.
`
    },

    social: {
        name: "Social Media Post",
        prompt: (topic) => `
Create an engaging social media post about:

"${topic}"

Requirements:
- Start with an attention-grabbing opening.
- Keep the language clear and engaging.
- Make the post suitable for a general audience.
- Include a clear call to action.
- Add relevant hashtags.
`
    },

    article: {
        name: "Article",
        prompt: (topic) => `
Write a well-structured article about:

"${topic}"

Requirements:
- Create an informative title.
- Include an introduction.
- Organize the article using appropriate headings.
- Explain important points clearly.
- Provide useful examples or insights.
- Finish with a strong conclusion.
`
    },

    product: {
        name: "Product Description",
        prompt: (topic) => `
Create a compelling product description for:

"${topic}"

Requirements:
- Clearly explain what the product is.
- Highlight its key features.
- Explain the benefits to the customer.
- Use persuasive but honest language.
- End with a clear call to action.
`
    },

    marketing: {
        name: "Marketing Content",
        prompt: (topic) => `
Create professional marketing content about:

"${topic}"

Requirements:
- Identify the target audience.
- Create an engaging headline.
- Clearly communicate the value or benefits.
- Use persuasive but trustworthy language.
- Include a strong call to action.
`
    }

};


// ==========================================
// Content Generator
// ==========================================

const generateButton = document.querySelector(".generate-btn");
const promptInput = document.querySelector("#prompt");
const contentType = document.querySelector("#contentType");
const outputSection = document.querySelector(".output");
const outputContent = document.querySelector(".output-content");


// Generate content when the user clicks the button
generateButton.addEventListener("click", function () {

    const topic = promptInput.value.trim();
    const selectedType = contentType.value;

    // Check if the user entered a topic
    if (topic === "") {

        outputSection.style.display = "block";

        outputContent.textContent =
            "Please enter a topic or prompt before generating content.";

        return;
    }


    // Find the selected prompt template
    const selectedPrompt = promptLibrary[selectedType];


    // Display loading message
    outputSection.style.display = "block";

    outputContent.textContent =
        "Preparing your " +
        selectedPrompt.name +
        " prompt...";


    // Temporary demonstration
    setTimeout(function () {

    
        const finalPrompt = selectedPrompt.prompt(topic);

        outputContent.textContent =
            "Prompt prepared for NandiGen AI:\n\n" +
            finalPrompt +
            "\n\n" +
            "Next step: connect this prompt to an AI API to generate the final content.";

    }, 1000);

   setTimeout(function () {

        const finalPrompt = selectedPrompt.prompt(topic);

        outputContent.textContent =
            "Prompt prepared for NandiGen AI:\n\n" +
            finalPrompt +
            "\n\n" +
            "Next step: connect this prompt to an AI API to generate the final content.";

    }, 1000);

});
