class CustomerIntelligenceDashboard {
    constructor() {
        this.activeSection = 'dashboard';
        this.initializeEventListeners();
        this.loadInitialContent();
    }
}

// Create global app instance
const app = new CustomerIntelligenceDashboard();

// Ensure DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    // The app is already initialized through the global instance
    // Any additional initialization can go here
});

    initializeEventListeners() {
        // Hamburger Menu Toggle
        const hamburgerBtn = document.getElementById('hamburger-menu-toggle');
        const app = document.getElementById('app');

        hamburgerBtn.addEventListener('click', () => {
            app.classList.toggle('menu-open');
        });

        // Navigation Buttons
        const navButtons = document.querySelectorAll('.nav-button');
        navButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.loadSection(section);

                // Close menu on mobile
                app.classList.remove('menu-open');
            });
        });
    }

    loadInitialContent() {
        this.loadSection('dashboard');
    }

    loadSection(section) {
        this.activeSection = section;
        const contentArea = document.getElementById('content-area');

        // Clear previous content
        contentArea.innerHTML = '';

        switch(section) {
            case 'dashboard':
                this.loadDashboardContent(contentArea);
                break;
            case 'messaging':
                this.loadMessagingContent(contentArea);
                break;
            case 'templates':
                this.loadTemplatesContent(contentArea);
                break;
            case 'analytics':
                this.loadAnalyticsContent(contentArea);
                break;
            case 'settings':
                this.loadSettingsContent(contentArea);
                break;
            case 'help':
                this.loadHelpContent(contentArea);
                break;
        }

        // Update active navigation button
        this.updateActiveNavButton(section);
    }

    updateActiveNavButton(section) {
        // Remove active state from all buttons
        const navButtons = document.querySelectorAll('.nav-button');
        navButtons.forEach(btn => {
            btn.classList.remove('bg-blue-900', 'bg-opacity-50');
        });

        // Add active state to current section's button
        const activeButton = document.querySelector(`.nav-button[data-section="${section}"]`);
        if (activeButton) {
            activeButton.classList.add('bg-blue-900', 'bg-opacity-50');
        }
    }

    loadDashboardContent(contentArea) {
        contentArea.innerHTML = `
            <div class="h-full p-6 overflow-auto">
                <h2 class="text-3xl font-bold mb-6">Customer Overview</h2>

                <!-- Customer Categories Summary -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <!-- Elite Customers -->
                    <div class="rounded-xl p-4 cursor-pointer transform transition hover:scale-105 hover:shadow-lg bg-gradient-to-br from-purple-700 to-purple-900">
                        <h3 class="text-xl font-semibold">Elite Customers</h3>
                        <div class="mt-2 text-4xl font-bold">537</div>
                        <div class="text-sm opacity-80 mt-1">17.34% of customer base</div>
                        <div class="mt-3 flex items-end justify-between">
                            <div class="text-xs opacity-70">44.68% of revenue</div>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                    </div>
            </div>
        `;
    }

    loadMessagingContent(contentArea) {
        contentArea.innerHTML = `
            <div class="h-full p-6 overflow-auto">
                <h2 class="text-3xl font-bold mb-6">Customer Messaging Journey</h2>

                <!-- Customer Group Selector -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <!-- Elite Customers -->
                    <div class="rounded-xl p-4 cursor-pointer transition-transform hover:scale-105 hover:shadow-lg bg-gradient-to-br from-purple-700 to-purple-900">
                        <h3 class="text-xl font-semibold">Elite Customers</h3>
                        <div class="mt-3 flex items-center justify-between">
                            <div class="text-xs opacity-70">Messaging Journey</div>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- Steadfast Customers -->
                    <div class="rounded-xl p-4 cursor-pointer transition-transform hover:scale-105 hover:shadow-lg bg-gradient-to-br from-blue-700 to-blue-900">
                        <h3 class="text-xl font-semibold">Steadfast Customers</h3>
                        <div class="mt-3 flex items-center justify-between">
                            <div class="text-xs opacity-70">Messaging Journey</div>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- At-Risk Customers -->
                    <div class="rounded-xl p-4 cursor-pointer transition-transform hover:scale-105 hover:shadow-lg bg-gradient-to-br from-yellow-600 to-yellow-800">
                        <h3 class="text-xl font-semibold">At-Risk Customers</h3>
                        <div class="mt-3 flex items-center justify-between">
                            <div class="text-xs opacity-70">Messaging Journey</div>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- Inactive Customers -->
                    <div class="rounded-xl p-4 cursor-pointer transition-transform hover:scale-105 hover:shadow-lg bg-gradient-to-br from-red-700 to-red-900">
                        <h3 class="text-xl font-semibold">Inactive Customers</h3>
                        <div class="mt-3 flex items-center justify-between">
                            <div class="text-xs opacity-70">Messaging Journey</div>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Message Journey Sample -->
                <div class="bg-black bg-opacity-30 rounded-xl p-6">
                    <div class="grid grid-cols-5 gap-4 mb-4">
                        <div class="col-span-1"></div>
                        <div class="col-span-1 bg-blue-600 text-white text-center py-2 px-4 rounded-t-lg font-medium">Email</div>
                        <div class="col-span-1 bg-green-600 text-white text-center py-2 px-4 rounded-t-lg font-medium">SMS</div>
                        <div class="col-span-1 bg-purple-600 text-white text-center py-2 px-4 rounded-t-lg font-medium">Phone Call</div>
                        <div class="col-span-1 bg-red-600 text-white text-center py-2 px-4 rounded-t-lg font-medium">Mailers</div>
                    </div>

                    <div class="space-y-4">
                        <!-- Timeline rows -->
                        <div class="grid grid-cols-5 gap-4">
                            <div class="col-span-1 bg-black bg-opacity-30 flex items-center p-4 rounded-lg">
                                <span class="font-medium">1 Day Before Service</span>
                            </div>
                            <div class="col-span-1 bg-blue-600 text-white rounded-lg p-4">
                                <div class="font-medium mb-2">Service Reminder</div>
                                <div class="text-xs opacity-80">
                                    Sent 2,486 times
                                </div>
                            </div>
                            <div class="col-span-1 bg-green-600 text-white rounded-lg p-4">
                                <div class="font-medium mb-2">Appointment Reminder</div>
                                <div class="text-xs opacity-80">
                                    Sent 1,920 times
                                </div>
                            </div>
                            <div class="col-span-1 bg-black bg-opacity-20 rounded-lg p-4 flex items-center justify-center min-h-[100px]">
                                <span class="text-gray-400 text-sm">No message</span>
                            </div>
                            <div class="col-span-1 bg-black bg-opacity-20 rounded-lg p-4 flex items-center justify-center min-h-[100px]">
                                <span class="text-gray-400 text-sm">No message</span>
                            </div>
                        </div>

                        <div class="grid grid-cols-5 gap-4">
                            <div class="col-span-1 bg-black bg-opacity-30 flex items-center p-4 rounded-lg">
                                <span class="font-medium">Day of Service</span>
                            </div>
                            <div class="col-span-1 bg-black bg-opacity-20 rounded-lg p-4 flex items-center justify-center min-h-[100px]">
                                <span class="text-gray-400 text-sm">No message</span>
                            </div>
                            <div class="col-span-1 bg-black bg-opacity-20 rounded-lg p-4 flex items-center justify-center min-h-[100px]">
                                <span class="text-gray-400 text-sm">No message</span>
                            </div>
                            <div class="col-span-1 bg-black bg-opacity-20 rounded-lg p-4 flex items-center justify-center min-h-[100px]">
                                <span class="text-gray-400 text-sm">No message</span>
                            </div>
                            <div class="col-span-1 bg-black bg-opacity-20 rounded-lg p-4 flex items-center justify-center min-h-[100px]">
                                <span class="text-gray-400 text-sm">No message</span>
                            </div>
                        </div>

                        <div class="grid grid-cols-5 gap-4">
                            <div class="col-span-1 bg-black bg-opacity-30 flex items-center p-4 rounded-lg">
                                <span class="font-medium">1 Day After Service</span>
                            </div>
                            <div class="col-span-1 bg-black bg-opacity-20 rounded-lg p-4 flex items-center justify-center min-h-[100px]">
                                <span class="text-gray-400 text-sm">No message</span>
                            </div>
                            <div class="col-span-1 bg-black bg-opacity-20 rounded-lg p-4 flex items-center justify-center min-h-[100px]">
                                <span class="text-gray-400 text-sm">No message</span>
                            </div>
                            <div class="col-span-1 bg-black bg-opacity-20 rounded-lg p-4 flex items-center justify-center min-h-[100px]">
                                <span class="text-gray-400 text-sm">No message</span>
                            </div>
                            <div class="col-span-1 bg-black bg-opacity-20 rounded-lg p-4 flex items-center justify-center min-h-[100px]">
                                <span class="text-gray-400 text-sm">No message</span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 text-center">
                        <button class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition">
                            View Complete Journey
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    loadTemplatesContent(contentArea) {
        contentArea.innerHTML = `
            <div class="h-full flex items-center justify-center">
                <div class="text-center p-8 bg-black bg-opacity-30 rounded-lg max-w-2xl">
                    <h2 class="text-3xl font-bold mb-4">Message Templates</h2>
                    <p class="text-gray-300 mb-6">This section will allow you to create, edit, and manage message templates for all your customer communications.</p>
                    <button onclick="app.loadSection('dashboard')" class="px-4 py-2 bg-blue-600 rounded-lg">
                        Return to Dashboard
                    </button>
                </div>
            </div>
        `;
    }

    loadAnalyticsContent(contentArea) {
        contentArea.innerHTML = `
            <div class="h-full flex items-center justify-center">
                <div class="text-center p-8 bg-black bg-opacity-30 rounded-lg max-w-2xl">
                    <h2 class="text-3xl font-bold mb-4">Communication Analytics</h2>
                    <p class="text-gray-300 mb-6">This section will provide detailed analytics on message performance, customer engagement, and ROI for your communication strategies.</p>
                    <button onclick="app.loadSection('dashboard')" class="px-4 py-2 bg-blue-600 rounded-lg">
                        Return to Dashboard
                    </button>
                </div>
            </div>
        `;
    }

    loadSettingsContent(contentArea) {
        contentArea.innerHTML = `
            <div class="h-full flex items-center justify-center">
                <div class="text-center p-8 bg-black bg-opacity-30 rounded-lg max-w-2xl">
                    <h2 class="text-3xl font-bold mb-4">System Settings</h2>
                    <p class="text-gray-300 mb-6">Configure system settings, user preferences, and integration options.</p>
                    <button onclick="app.loadSection('dashboard')" class="px-4 py-2 bg-blue-600 rounded-lg">
                        Return to Dashboard
                    </button>
                </div>
            </div>
        `;
    }

    loadHelpContent(contentArea) {
        contentArea.innerHTML = `
            <div class="h-full flex items-center justify-center">
                <div class="text-center p-8 bg-black bg-opacity-30 rounded-lg max-w-2xl">
                    <h2 class="text-3xl font-bold mb-4">Help & Support</h2>
                    <p class="text-gray-300 mb-6">Access documentation, tutorials, and contact support for assistance.</p>
                    <button onclick="app.loadSection('dashboard')" class="px-4 py-2 bg-blue-600 rounded-lg">
                        Return to Dashboard
                    </button>
                </div>
            </div>
        `;
    }

                <!-- Key Insights -->
                <div class="bg-black bg-opacity-30 rounded-xl p-6 mt-6">
                    <h3 class="text-2xl font-semibold mb-4">Key Insights</h3>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div class="ml-4 flex-1">
                                <p class="font-medium">
                                    Your 537 Elite Customers are your VIP rock stars—they make up 17.34% of your customer base but are ringing in a massive 44.68% of your sales!
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="flex-shrink-0 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div class="ml-4 flex-1">
                                <p class="font-medium">
                                    With a bit of extra love and messaging targeted to the Steadfast folks, you could easily see 82 more join the Elite ranks. That's your ticket to hitting that sweet 20% Elite Customer goal.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="flex-shrink-0 bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                </svg>
                            </div>
                            <div class="ml-4 flex-1">
                                <p class="font-medium">
                                    Your At-Risk segment (12.82%) needs immediate attention, especially the 359 Existing Customers in Last Chance status.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>

                    <!-- Steadfast Customers -->
                    <div class="rounded-xl p-4 cursor-pointer transform transition hover:scale-105 hover:shadow-lg bg-gradient-to-br from-blue-700 to-blue-900">
                        <h3 class="text-xl font-semibold">Steadfast Customers</h3>
                        <div class="mt-2 text-4xl font-bold">1,673</div>
                        <div class="text-sm opacity-80 mt-1">55.28% of customer base</div>
                        <div class="mt-3 flex items-end justify-between">
                            <div class="text-xs opacity-70">41.39% of revenue</div>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- At-Risk Customers -->
                    <div class="rounded-xl p-4 cursor-pointer transform transition hover:scale-105 hover:shadow-lg bg-gradient-to-br from-yellow-600 to-yellow-800">
                        <h3 class="text-xl font-semibold">At-Risk Customers</h3>
                        <div class="mt-2 text-4xl font-bold">389</div>
                        <div class="text-sm opacity-80 mt-1">12.82% of customer base</div>
                        <div class="mt-3 flex items-end justify-between">
                            <div class="text-xs opacity-70">7.75% of revenue</div>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- Inactive Customers -->
                    <div class="rounded-xl p-4 cursor-pointer transform transition hover:scale-105 hover:shadow-lg bg-gradient-to-br from-red-700 to-red-900">
                        <h3 class="text-xl font-semibold">Inactive Customers</h3>
                        <div class="mt-2 text-4xl font-bold">440</div>
                        <div class="text-sm opacity-80 mt-1">14.56% of customer base</div>
                        <div class="mt-3 flex items-end justify-between">
                            <div class="text-xs opacity-70">6.17% of revenue</div>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>
