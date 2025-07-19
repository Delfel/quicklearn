const API_KEY = "sk-PASTE_YOUR_KEY_HERE"; // 👈 Paste your OpenAI API key here

async function askQuestion() {
  const question = document.getElementById("questionInput").value;
  const responseBox = document.getElementById("responseBox");

  if (!question) {
    alert("Please enter a question.");
    return;
  }

  responseBox.innerText = "Thinking...";

  try {
    const result = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }]
      })
    });

    const data = await result.json();
    responseBox.innerText = data.choices[0].message.content;
  } catch (error) {
    responseBox.innerText = "Error: " + error.message;
  }
}
