class CustomerChatInterface {
    constructor() {
        this.chatContainer = document.getElementById('customer-chat-interface');
        this.chatMessages = document.getElementById('chat-messages');
        this.chatInput = document.getElementById('chat-input');
        this.chatForm = document.getElementById('chat-message-form');
        this.minimizeBtn = document.getElementById('chat-minimize-btn');
        this.isMinimized = false;

        this.bindEvents();
    }

    bindEvents() {
        this.chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleUserMessage();
        });

        this.minimizeBtn.addEventListener('click', () => {
            this.toggleChatMinimize();
        });
    }

    handleUserMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;

        // Add user message to chat
        this.addMessage('user', message);

        // Clear input
        this.chatInput.value = '';

        // Simulate AI response
        this.simulateAIResponse(message);
    }

    addMessage(type, content) {
        // Remove initial message if it exists
        const initialMessage = this.chatMessages.querySelector('.initial-message');
        if (initialMessage) {
            initialMessage.remove();
        }

        const messageEl = document.createElement('div');
        messageEl.className = `message ${type === 'user' ? 'text-right' : 'text-left'} mb-4`;

        messageEl.innerHTML = `
            <div class="${
                type === 'user'
                    ? 'bg-blue-600 text-white inline-block rounded-lg p-3 max-w-[80%] ml-auto'
                    : 'bg-gray-700 text-white inline-block rounded-lg p-3 max-w-[80%]'
            }">
                ${content}
            </div>
        `;

        this.chatMessages.appendChild(messageEl);
        this.scrollToBottom();
    }

    simulateAIResponse(userMessage) {
        // Simulate AI processing delay
        setTimeout(() => {
            let response = '';
            const lowerMessage = userMessage.toLowerCase();

            if (lowerMessage.includes('elite customers') || lowerMessage.includes('elite')) {
                response = "Elite customers make up 17.34% of your base but generate 44.68% of your revenue. They're your VIP rock stars! Would you like more details about this group?";
            } else if (lowerMessage.includes('at risk') || lowerMessage.includes('at-risk')) {
                response = "Your At-Risk segment is 12.82% of customers. Notably, 359 existing customers are in the 'Last Chance' category and need immediate attention to prevent losing their business.";
            } else if (lowerMessage.includes('steadfast')) {
                response = "Steadfast customers comprise 55.28% of your customer base. There's potential to convert 82 of these customers into Elite status with targeted messaging.";
            } else if (lowerMessage.includes('inactive')) {
                response = "Inactive customers represent 14.56% of your base. This segment includes 440 customers who haven't engaged recently, representing a $286,503 revenue opportunity if reactivated.";
            } else if (lowerMessage.includes('messaging') || lowerMessage.includes('message')) {
                response = "Your current messaging strategy has two touchpoints for service appointments: an email reminder and SMS notification one day before service. Would you like to explore more touchpoint opportunities?";
            } else if (lowerMessage.includes('revenue') || lowerMessage.includes('sales')) {
                response = "Your total monthly revenue is $462,938, with Elite customers contributing 44.68%, Steadfast 41.39%, At-Risk 7.75%, and Inactive 6.17%.";
            } else {
                response = "I'm your Customer Intelligence Assistant. I can provide insights about your Elite, Steadfast, At-Risk, and Inactive customer segments. What specific information would you like to know?";
            }

            this.addMessage('assistant', response);
        }, 800);
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    toggleChatMinimize() {
        this.isMinimized = !this.isMinimized;
        this.chatContainer.classList.toggle('minimized', this.isMinimized);

        // Update button icon
        if (this.minimizeBtn.querySelector('svg path')) {
            this.minimizeBtn.querySelector('svg path').setAttribute(
                'd',
                this.isMinimized
                    ? 'M5 15l7-7 7 7'
                    : 'M19 9l-7 7-7-7'
            );
        }
    }
}

// Initialize chat when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const customerChat = new CustomerChatInterface();
});
