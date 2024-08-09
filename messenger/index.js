document.getElementById('sendBtn').onclick = function() {
    const messageText = document.getElementById('input').value.trim();
    if (messageText) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message sent';

        const messageContent = `<p>${messageText}</p>
                                <span class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;

        messageDiv.innerHTML = messageContent;

        document.getElementById('messages').appendChild(messageDiv);
        document.getElementById('input').value = '';
        document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
    }
};