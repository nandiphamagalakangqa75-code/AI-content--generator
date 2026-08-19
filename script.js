// ==========================================
// NandiGen AI - Intelligent Content Studio
// Developer: Nandipha Magalakangqa
// ==========================================


// ==========================================
// Prompt Library
// ==========================================

const promptLibrary = {

    blog: `
        Create a well-structured and engaging blog post.
        Include a strong title, introduction, clear headings,
        useful information, examples where appropriate,
        and a conclusion.
    `,

    social: `
        Create an engaging social media post.
        Make the content concise, attention-grabbing,
        audience-focused, and include a clear call to action.
    `,

    article: `
        Create a professional and informative article.
        Include a compelling title, introduction,
        logically organised sections, useful information,
        and a conclusion.
    `,

    product: `
        Create a persuasive product description.
        Highlight the product's main features, benefits,
        value to the customer, and include a strong
        call to action.
    `,

    marketing: `
        Create professional marketing content.
        Focus on the target audience, value proposition,
        benefits, persuasive messaging, and a clear
        call to action.
    `

};


// ==========================================
// Get Page Elements
// ==========================================

const contentType = document.getElementById("contentType");
const promptInput = document.getElementById("prompt");
const generateButton = document.querySelector(".generate-btn");

const outputSection = document.querySelector(".output");
const outputContent = document.querySelector(".output-content");


// ==========================================
// Generate Content
// ==========================================

generateButton.addEventListener("click", generateContent);


async function generateContent() {

    const selectedType = contentType.value;
    const userPrompt = promptInput.value.trim();


    // Validate input

    if (!userPrompt) {

        alert("Please enter a topic or prompt first.");

        return;
    }


    // Get prompt instructions

    const instructions =
        promptLibrary[selectedType] ||
        promptLibrary.blog;


    // Combine library instructions
    // with the user's request

    const finalPrompt = `
You are NandiGen AI, an intelligent content
generation assistant.

Content type:
${selectedType}

Instructions:
${instructions}

User request:
${userPrompt}

Create high-quality content based on the
information provided above.
`;


    // Show loading state

    generateButton.disabled = true;
    generateButton.textContent = "Generating...";

    outputSection.style.display = "block";

    outputContent.textContent =
        "NandiGen AI is preparing your content...";


    try {

        // ==========================================
        // Send request to backend
        // ==========================================

        const response = await fetch("/api/generate", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                prompt: finalPrompt,

                contentType: selectedType

            })

        });


        // Check response

        if (!response.ok) {

            throw new Error(
                "The server could not process the request."
            );

        }


        const data = await response.json();


        // Display generated content

        if (data.success) {

            outputContent.textContent =
                data.content;

        } else {

            throw new Error(
                data.error ||
                "Content generation failed."
            );

        }


    } catch (error) {

        console.error(
            "NandiGen AI error:",
            error
        );

        outputContent.textContent =
            "Unable to generate content right now. " +
            "Please try again later.";


    } finally {

        // Restore button

        generateButton.disabled = false;

        generateButton.textContent =
            "Generate Content";

    }

}
