// Create stars background effect
        function createStars() {
            const stars = document.getElementById('stars');
            const count = 350; // Increased from 250 to 350 stars
            
            for (let i = 0; i < count; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Random position
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                // Random size with more variation
                const size = Math.random() * 4 + 0.5; // Increased minimum size
                
                star.style.left = `${x}%`;
                star.style.top = `${y}%`;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                // Random opacity with some brighter stars
                star.style.opacity = Math.random() * 0.8 + 0.2; // Increased minimum opacity
                
                // Add twinkling effect to more stars
                if (Math.random() > 0.5) { // Increased chance of twinkling
                    const duration = 2 + Math.random() * 8; // Increased max duration
                    star.style.animation = `twinkle ${duration}s infinite ease-in-out`;
                }
                
                // Add color variation to some stars
                if (Math.random() > 0.8) {
                    const hue = Math.random() * 60 + 240; // Blue to purple hues
                    star.style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
                    star.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, 100%, 70%)`;
                }
                
                stars.appendChild(star);
            }
            
            // Add constellations
            createConstellations();
        }
        
        // Create constellations
        function createConstellations() {
            const starsContainer = document.getElementById('stars');
            
            // Define some simple constellations
            const constellations = [
                {
                    name: 'big-dipper',
                    stars: [
                        {x: 15, y: 20}, {x: 20, y: 22}, {x: 25, y: 25}, 
                        {x: 30, y: 28}, {x: 35, y: 25}, {x: 38, y: 20}, 
                        {x: 40, y: 15}
                    ],
                    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6]]
                },
                {
                    name: 'cassiopeia',
                    stars: [
                        {x: 65, y: 15}, {x: 70, y: 10}, {x: 75, y: 15}, 
                        {x: 80, y: 10}, {x: 85, y: 15}
                    ],
                    lines: [[0,1], [1,2], [2,3], [3,4]]
                },
                {
                    name: 'orion',
                    stars: [
                        {x: 45, y: 60}, {x: 50, y: 55}, {x: 52, y: 65}, 
                        {x: 55, y: 70}, {x: 58, y: 65}, {x: 60, y: 55}, 
                        {x: 65, y: 60}
                    ],
                    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [1,5], [2,4]]
                }
            ];
            
            // Create each constellation
            constellations.forEach(constellation => {
                const constellationEl = document.createElement('div');
                constellationEl.classList.add('constellation');
                constellationEl.classList.add(constellation.name);
                
                // Create stars
                constellation.stars.forEach((star, index) => {
                    const starEl = document.createElement('div');
                    starEl.classList.add('constellation-star');
                    
                    // Random size for constellation stars (larger than background stars)
                    const size = 2 + Math.random() * 3;
                    
                    starEl.style.left = `${star.x}%`;
                    starEl.style.top = `${star.y}%`;
                    starEl.style.width = `${size}px`;
                    starEl.style.height = `${size}px`;
                    
                    constellationEl.appendChild(starEl);
                });
                
                // Create lines between stars
                constellation.lines.forEach(line => {
                    const star1 = constellation.stars[line[0]];
                    const star2 = constellation.stars[line[1]];
                    
                    const lineEl = document.createElement('div');
                    lineEl.classList.add('constellation-line');
                    
                    // Calculate line position and dimensions
                    const x1 = star1.x;
                    const y1 = star1.y;
                    const x2 = star2.x;
                    const y2 = star2.y;
                    
                    // Calculate length and angle
                    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                    
                    // Set line properties
                    lineEl.style.left = `${x1}%`;
                    lineEl.style.top = `${y1}%`;
                    lineEl.style.width = `${length}%`;
                    lineEl.style.height = '1px';
                    lineEl.style.transform = `rotate(${angle}deg)`;
                    
                    constellationEl.appendChild(lineEl);
                });
                
                starsContainer.appendChild(constellationEl);
            });
        }
        
        // Add twinkling animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes twinkle {
                0% { opacity: 0.1; }
                50% { opacity: 0.8; }
                100% { opacity: 0.1; }
            }
            
            /* Add a subtle pulse to constellation stars */
            .constellation-star {
                animation: pulse 4s infinite ease-in-out;
            }
            
            @keyframes pulse {
                0% { box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.2); }
                50% { box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.4); }
                100% { box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.2); }
            }
        `;
        document.head.appendChild(style);
        
        // Call the function when the page loads
        window.addEventListener('load', createStars);
        
        // Add functionality to material checkboxes
        document.addEventListener('DOMContentLoaded', function() {
            const checkboxes = document.querySelectorAll('.material-checkbox');
            
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('click', function() {
                    this.classList.toggle('checked');
                });
            });
            
            // Card navigation
            const cards = document.querySelectorAll('.ritual-card');
            const navButtons = document.querySelectorAll('.card-nav-button');
            
            navButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Get the target card ID
                    const nextCardId = this.getAttribute('data-next');
                    const prevCardId = this.getAttribute('data-prev');
                    const targetId = nextCardId || prevCardId;
                    
                    if (targetId) {
                        // Show the target card without hiding others
                        document.getElementById(targetId).classList.add('active');
                        
                        // Remove the navigation buttons from the current card
                        const currentCard = this.closest('.ritual-card');
                        const cardNavigation = currentCard.querySelector('.card-navigation');
                        if (cardNavigation) {
                            cardNavigation.style.display = 'none';
                        } else {
                            // For the first card which has a single button
                            this.style.display = 'none';
                        }
                        
                        // Scroll to the newly revealed card
                        document.getElementById(targetId).scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
            
            
            
            // Get elements
            const stepContainer = document.querySelector('.step-container');
            const stepTitle = document.getElementById('step-title');
            const stepContent = document.getElementById('step-content');
            const progressDots = document.querySelectorAll('#ritual-progress .progress-dot');
            
            let currentStep = 0;
            const totalSteps = steps.length;
            
            // Update the number of progress dots to match the number of steps
            const progressIndicator = document.getElementById('ritual-progress');
            progressIndicator.innerHTML = '';
            for (let i = 0; i < totalSteps; i++) {
                const dot = document.createElement('div');
                dot.classList.add('progress-dot');
                if (i === 0) dot.classList.add('active');
                progressIndicator.appendChild(dot);
            }
            
            // Initialize first step
            updateStepContent();
            
            // Remove all existing navigation elements
            const existingStepNavigation = document.querySelector('.step-navigation');
            if (existingStepNavigation) {
                existingStepNavigation.remove();
            }
            
            // Store all created step containers for easy reference
            const createdStepContainers = [stepContainer];
            
            // Add the first step navigation card
            const firstStepNavigation = document.createElement('div');
            firstStepNavigation.classList.add('step-navigation-card');
            firstStepNavigation.innerHTML = `
                <div></div>
                <button class="step-next-button">Next <span class="arrow">→</span></button>
            `;
            stepContainer.appendChild(firstStepNavigation);
            
            // Function to handle next step creation
            function createNextStep() {
                if (currentStep < totalSteps - 1) {
                    // Remove navigation from ALL previous step containers
                    createdStepContainers.forEach(container => {
                        const navCard = container.querySelector('.step-navigation-card');
                        if (navCard) {
                            navCard.remove();
                        }
                    });
                    
                    currentStep++;
                    
                    // Update progress dots
                    progressDots.forEach((dot, index) => {
                        if (index <= currentStep) {
                            dot.classList.add('active');
                        } else {
                            dot.classList.remove('active');
                        }
                    });
                    
                    // Create a new step container
                    const newStepContainer = document.createElement('div');
                    newStepContainer.classList.add('step-container');
                    newStepContainer.innerHTML = `
                        <div class="step-header">
                            <div class="step-title">${steps[currentStep].title}</div>
                            <div class="step-number">Step ${currentStep + 1} of ${totalSteps}</div>
                        </div>
                        <div class="step-content">
                            ${steps[currentStep].content}
                        </div>
                        <div class="step-navigation-card">
                            <button class="step-back-button"><span class="arrow">←</span> Back</button>
                            ${currentStep < totalSteps - 1 ? 
                                `<button class="step-next-button">Next <span class="arrow">→</span></button>` : 
                                `<button class="step-complete-button">Complete Ritual</button>`}
                        </div>
                    `;
                    
                    // Add to our tracking array
                    createdStepContainers.push(newStepContainer);
                    
                    // Append the new step after the last step container
                    const howToPerform = document.querySelector('.how-to-perform');
                    howToPerform.appendChild(newStepContainer);
                    
                    // Add event listener to the new next button
                    const newNextButton = newStepContainer.querySelector('.step-next-button, .step-complete-button');
                    if (newNextButton) {
                        newNextButton.addEventListener('click', function() {
                            if (currentStep < totalSteps - 1) {
                                // If not the last step, create the next step
                                createNextStep();
                            } else {
                                // If it's the last step, handle completion
                                alert('Ritual completed! May your intentions manifest with the power of the new moon.');
                            }
                        });
                    }
                    
                    // Add event listener to the back button
                    const backButton = newStepContainer.querySelector('.step-back-button');
                    if (backButton) {
                        backButton.addEventListener('click', function() {
                            // Remove the current step container
                            newStepContainer.remove();
                            
                            // Remove from tracking array
                            createdStepContainers.pop();
                            
                            // Decrement current step
                            currentStep--;
                            
                            // Update progress dots
                            progressDots.forEach((dot, index) => {
                                if (index <= currentStep) {
                                    dot.classList.add('active');
                                } else {
                                    dot.classList.remove('active');
                                }
                            });
                            
                            // Add navigation back to the previous step container
                            const previousContainer = createdStepContainers[createdStepContainers.length - 1];
                            const newNavigation = document.createElement('div');
                            newNavigation.classList.add('step-navigation-card');
                            
                            // First step doesn't need a back button
                            if (currentStep === 0) {
                                newNavigation.innerHTML = `
                                    <div></div>
                                    <button class="step-next-button">Next <span class="arrow">→</span></button>
                                `;
                            } else {
                                newNavigation.innerHTML = `
                                    <button class="step-back-button"><span class="arrow">←</span> Back</button>
                                    <button class="step-next-button">Next <span class="arrow">→</span></button>
                                `;
                            }
                            
                            previousContainer.appendChild(newNavigation);
                            
                            // Add event listeners to the new buttons
                            const newNextBtn = newNavigation.querySelector('.step-next-button');
                            if (newNextBtn) {
                                newNextBtn.addEventListener('click', createNextStep);
                            }
                            
                            const newBackBtn = newNavigation.querySelector('.step-back-button');
                            if (newBackBtn) {
                                newBackBtn.addEventListener('click', function() {
                                    // Similar back functionality for nested back buttons
                                    previousContainer.remove();
                                    createdStepContainers.pop();
                                    currentStep--;
                                    
                                    // Update progress dots
                                    progressDots.forEach((dot, index) => {
                                        if (index <= currentStep) {
                                            dot.classList.add('active');
                                        } else {
                                            dot.classList.remove('active');
                                        }
                                    });
                                    
                                    // Add navigation to the previous container
                                    const prevContainer = createdStepContainers[createdStepContainers.length - 1];
                                    addNavigationToContainer(prevContainer, currentStep);
                                    
                                    // Scroll to the previous container
                                    prevContainer.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                });
                            }
                            
                            // Scroll to the previous step
                            previousContainer.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        });
                    }
                    
                    // Scroll to the new step
                    newStepContainer.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            
            // Helper function to add navigation to a container
            function addNavigationToContainer(container, stepIndex) {
                const newNavigation = document.createElement('div');
                newNavigation.classList.add('step-navigation-card');
                
                if (stepIndex === 0) {
                    newNavigation.innerHTML = `
                        <div></div>
                        <button class="step-next-button">Next <span class="arrow">→</span></button>
                    `;
                } else {
                    newNavigation.innerHTML = `
                        <button class="step-back-button"><span class="arrow">←</span> Back</button>
                        <button class="step-next-button">Next <span class="arrow">→</span></button>
                    `;
                }
                
                container.appendChild(newNavigation);
                
                // Add event listeners
                const nextBtn = newNavigation.querySelector('.step-next-button');
                if (nextBtn) {
                    nextBtn.addEventListener('click', createNextStep);
                }
                
                const backBtn = newNavigation.querySelector('.step-back-button');
                if (backBtn) {
                    backBtn.addEventListener('click', function() {
                        container.remove();
                        createdStepContainers.pop();
                        currentStep--;
                        
                        // Update progress dots
                        progressDots.forEach((dot, index) => {
                            if (index <= currentStep) {
                                dot.classList.add('active');
                            } else {
                                dot.classList.remove('active');
                            }
                        });
                        
                        const prevContainer = createdStepContainers[createdStepContainers.length - 1];
                        addNavigationToContainer(prevContainer, currentStep);
                        
                        prevContainer.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    });
                }
            }
            
            // Add event listener to the first next button
            const firstNextButton = firstStepNavigation.querySelector('.step-next-button');
            if (firstNextButton) {
                firstNextButton.addEventListener('click', createNextStep);
            }
            
            // Add CSS for the back button
            const style = document.createElement('style');
            style.textContent = `
                .step-back-button {
                    background-color: rgba(255, 255, 255, 0.1);
                    color: var(--text-color);
                    border: none;
                    padding: 10px 18px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: background-color 0.3s ease;
                }
                
                .step-back-button:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                }
                
                .step-navigation-card {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 20px;
                    padding-top: 15px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
            `;
            document.head.appendChild(style);
            
            function updateStepContent() {
                // Update the step title and content
                stepTitle.textContent = steps[currentStep].title;
                stepContent.innerHTML = steps[currentStep].content;
            }
        });
        
        // Add mobile menu functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            if (mobileMenuBtn) {
                mobileMenuBtn.addEventListener('click', function() {
                    navLinks.classList.toggle('active');
                    // Toggle between menu and close icons
                    this.textContent = this.textContent === '☰' ? '✕' : '☰';
                });
            }
            
            // Close menu when clicking a link
            const navLinksItems = document.querySelectorAll('.nav-links a');
            navLinksItems.forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        navLinks.classList.remove('active');
                        if (mobileMenuBtn) {
                            mobileMenuBtn.textContent = '☰';
                        }
                    }
                });
            });
            
            // Adjust layout on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    navLinks.classList.remove('active');
                    if (mobileMenuBtn) {
                        mobileMenuBtn.textContent = '☰';
                    }
                }
            });
        });