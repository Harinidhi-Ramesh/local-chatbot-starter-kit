const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
});

userInput.addEventListener('input', resizeInput);

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  // 1. Render User Message & clear input
  appendMessage(text, 'user');
  userInput.value = '';
  resizeInput();

  // 2. Disable controls while waiting for backend
  toggleInputState(true);

  try {
    // 3. Call Plain Java Backend endpoint
    const response = await fetch('http://localhost:8080/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: text }),
    });

    if (!response.ok) {
      throw new Error(`Server status: ${response.status}`);
    }

    const data = await response.json();
    
    // 4. Render AI Reply
    appendMessage(data.reply || 'No response received.', 'ai');

  } catch (error) {
    console.error('Fetch error:', error);
    appendMessage('Error: Unable to reach the local backend server.', 'error');
  } finally {
    // 5. Re-enable inputs
    toggleInputState(false);
    userInput.focus();
  }
}

function appendMessage(text, senderClass) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', senderClass);
  messageElement.textContent = text;
  
  chatWindow.appendChild(messageElement);
  
  // Auto-scroll to the bottom
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function toggleInputState(isDisabled) {
  userInput.disabled = isDisabled;
  sendBtn.disabled = isDisabled;
}

function resizeInput() {
  userInput.style.height = 'auto';
  userInput.style.height = `${Math.min(userInput.scrollHeight, 160)}px`;
}
