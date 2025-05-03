const sendButton = document.querySelector("#sendButton");

sendButton.addEventListener("click", async () => {
  const inputText = document.querySelector("#inputText");
  const myMessage = inputText.value.trim();

  if (!myMessage) {
    return false;
  }

  const messagesContainer = document.querySelector(".chat__messages");

  messagesContainer.innerHTML += `<div class="chat__message chat__message--user">Yo: ${myMessage}</div>`;

  inputText.value = "";

  try {
    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: myMessage }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    messagesContainer.innerHTML += `<div class="chat__message chat__message--bot">Diego: ${data.reply}</div>`;
  } catch (error) {
    console.error("Error:", error);
  }
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
});
