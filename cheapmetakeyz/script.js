// Meta Store JavaScript Functionality with Working Search

// Games and Apps Database
const gamesDatabase = [
    // Top Selling Games
    {
        name: "Beat Saber",
        type: "game",
        category: "top-selling",
        originalPrice: "$29.99",
        currentPrice: "$4.99",
        discount: "-83%",
        image: "/images/beat-saber.png",
        url: "/games/beat-saber.html",
        rating: null,
        isFree: false
    },
    {
        name: "Bonelab",
        type: "game",
        category: "top-selling",
        originalPrice: "$39.99",
        currentPrice: "$7.99",
        discount: "-80%",
        image: "/images/bonelab.png",
        url: "/games/bonelab.html",
        rating: null,
        isFree: false
    },
    {
        name: "Blade & Sorcery: Nomad",
        type: "game",
        category: "top-selling",
        originalPrice: "$29.99",
        currentPrice: "$7.49",
        discount: "-75%",
        image: "/images/blade-sorcery-nomad.png",
        url: "/games/blade-sorcery-nomad.html",
        rating: null,
        isFree: false
    },
    {
        name: "I Am Cat",
        type: "game",
        category: "top-selling",
        originalPrice: "$19.99",
        currentPrice: "$3.59",
        discount: "-82%",
        image: "/images/i-am-cat.png",
        url: "/games/i-am-cat.html",
        rating: null,
        isFree: false
    },
    {
        name: "GOLF+",
        type: "game",
        category: "top-selling",
        originalPrice: "$29.99",
        currentPrice: "$6.89",
        discount: "-77%",
        image: "/images/golf-plus.png",
        url: "/games/golf-plus.html",
        rating: null,
        isFree: false
    },
    {
        name: "The Walking Dead: Saints & Sinners",
        type: "game",
        category: "top-selling",
        originalPrice: "$39.99",
        currentPrice: "$8.79",
        discount: "-78%",
        image: "/images/walking-dead-saints-sinners.png",
        url: "/games/walking-dead-saints-sinners.html",
        rating: null,
        isFree: false
    },
    {
        name: "Ghosts of Tabor",
        type: "game",
        category: "top-selling",
        originalPrice: "$24.99",
        currentPrice: "$4.74",
        discount: "-81%",
        image: "/images/ghosts-of-tabor.png",
        url: "/games/ghosts-of-tabor.html",
        rating: null,
        isFree: false
    },
    {
        name: "Job Simulator",
        type: "game",
        category: "top-selling",
        originalPrice: "$19.99",
        currentPrice: "$4.79",
        discount: "-76%",
        image: "/images/job-simulator.png",
        url: "/games/job-simulator.html",
        rating: null,
        isFree: false
    },
    {
        name: "Creed: Rise to Glory",
        type: "game",
        category: "top-selling",
        originalPrice: "$29.99",
        currentPrice: "$4.49",
        discount: "-85%",
        image: "/images/creed-rise-to-glory.png",
        url: "/games/creed-rise-to-glory.html",
        rating: null,
        isFree: false
    },
    {
        name: "Pavlov Shack",
        type: "game",
        category: "top-selling",
        originalPrice: "$24.99",
        currentPrice: "$5.24",
        discount: "-79%",
        image: "/images/pavlov-shack.png",
        url: "/games/pavlov-shack.html",
        rating: null,
        isFree: false
    },
    {
        name: "Five Nights at Freddy's: Help Wanted",
        type: "game",
        category: "top-selling",
        originalPrice: "$29.99",
        currentPrice: "$4.79",
        discount: "-84%",
        image: "/images/fnaf-help-wanted.png",
        url: "/games/fnaf-help-wanted.html",
        rating: null,
        isFree: false
    },
    {
        name: "SUPERHOT VR",
        type: "game",
        category: "top-selling",
        originalPrice: "$24.99",
        currentPrice: "$4.24",
        discount: "-83%",
        image: "/images/superhot-vr.png",
        url: "/games/superhot-vr.html",
        rating: null,
        isFree: false
    },
    {
        name: "Into The Radius 2",
        type: "game",
        category: "top-selling",
        originalPrice: "$34.99",
        currentPrice: "$6.99",
        discount: "-80%",
        image: "/images/into-the-radius-2.png",
        url: "/games/into-the-radius-2.html",
        rating: null,
        isFree: false
    },
    {
        name: "Battle Talent",
        type: "game",
        category: "top-selling",
        originalPrice: "$19.99",
        currentPrice: "$3.99",
        discount: "-80%",
        image: "/images/battle-talent.png",
        url: "/games/battle-talent.html",
        rating: null,
        isFree: false
    },
    {
        name: "Contractors",
        type: "game",
        category: "top-selling",
        originalPrice: "$19.99",
        currentPrice: "$4.99",
        discount: "-75%",
        image: "/images/contractors.png",
        url: "/games/contractors.html",
        rating: null,
        isFree: false
    },
    {
        name: "Real VR Fishing",
        type: "game",
        category: "top-selling",
        originalPrice: "$19.99",
        currentPrice: "$3.99",
        discount: "-80%",
        image: "/images/real-vr-fishing.png",
        url: "/games/real-vr-fishing.html",
        rating: null,
        isFree: false
    },
    {
        name: "Five Nights at Freddy's: Help Wanted 2",
        type: "game",
        category: "top-selling",
        originalPrice: "$29.99",
        currentPrice: "$5.99",
        discount: "-80%",
        image: "/images/fnaf-help-wanted-2.png",
        url: "/games/fnaf-help-wanted-2.html",
        rating: null,
        isFree: false
    },
    {
        name: "I am Security",
        type: "game",
        category: "top-selling",
        originalPrice: "$14.99",
        currentPrice: "$2.99",
        discount: "-80%",
        image: "/images/i-am-security.png",
        url: "/games/i-am-security.html",
        rating: null,
        isFree: false
    },
    {
        name: "Waltz of the Wizard",
        type: "game",
        category: "top-selling",
        originalPrice: "$19.99",
        currentPrice: "$3.99",
        discount: "-80%",
        image: "/images/waltz-of-the-wizard.png",
        url: "/games/waltz-of-the-wizard.html",
        rating: null,
        isFree: false
    },
    {
        name: "Walkabout Mini Golf",
        type: "game",
        category: "top-selling",
        originalPrice: "$14.99",
        currentPrice: "$3.74",
        discount: "-75%",
        image: "/images/walkabout-mini-golf.png",
        url: "/games/walkabout-mini-golf.html",
        rating: null,
        isFree: false
    },
    {
        name: "Tactical Assault VR",
        type: "game",
        category: "top-selling",
        originalPrice: "$24.99",
        currentPrice: "$4.99",
        discount: "-80%",
        image: "/images/tactical-assault-vr.png",
        url: "/games/tactical-assault-vr.html",
        rating: null,
        isFree: false
    },
    {
        name: "Batman: Arkham Shadow",
        type: "game",
        category: "top-selling",
        originalPrice: "$49.99",
        currentPrice: "$9.99",
        discount: "-80%",
        image: "/images/batman-arkham-shadow.png",
        url: "/games/batman-arkham-shadow.html",
        rating: null,
        isFree: false
    },
    {
        name: "Marvel's Iron Man VR",
        type: "game",
        category: "top-selling",
        originalPrice: "$39.99",
        currentPrice: "$7.99",
        discount: "-80%",
        image: "/images/marvels-iron-man-vr.png",
        url: "/games/marvels-iron-man-vr.html",
        rating: null,
        isFree: false
    },
    {
        name: "Virtual Desktop",
        type: "app",
        category: "top-selling",
        originalPrice: "$19.99",
        currentPrice: "$3.99",
        discount: "-80%",
        image: "/images/virtual-desktop.png",
        url: "/apps/virtual-desktop.html",
        rating: null,
        isFree: false
    },
    // New Releases Games
    {
        name: "REQUISITION VR",
        type: "game",
        category: "new-releases",
        originalPrice: "$19.99",
        currentPrice: "$3.99",
        discount: "-80%",
        image: "/images/requisition-vr.png",
        url: "/games/requisition-vr.html",
        rating: "4.5",
        isFree: false
    },
    {
        name: "Prison Boss Prohibition",
        type: "game",
        category: "new-releases",
        originalPrice: "$24.99",
        currentPrice: "$6.24",
        discount: "-75%",
        image: "/images/prison-boss-prohibition.png",
        url: "/games/prison-boss-prohibition.html",
        rating: "4.7",
        isFree: false
    },
    {
        name: "Bearly Escape",
        type: "game",
        category: "new-releases",
        originalPrice: "$14.99",
        currentPrice: "$2.69",
        discount: "-82%",
        image: "/images/bearly-escape.png",
        url: "/games/bearly-escape.html",
        rating: "4.1",
        isFree: false
    },
    {
        name: "Cave Crave",
        type: "game",
        category: "new-releases",
        originalPrice: "$12.99",
        currentPrice: "$2.98",
        discount: "-77%",
        image: "/images/cave-crave.png",
        url: "/games/cave-crave.html",
        rating: "3.6",
        isFree: false
    },
    {
        name: "VRacer Hoverbike",
        type: "game",
        category: "new-releases",
        originalPrice: "$16.99",
        currentPrice: "$3.22",
        discount: "-81%",
        image: "/images/vracer-hoverbike.png",
        url: "/games/vracer-hoverbike.html",
        rating: "4.3",
        isFree: false
    },
    {
        name: "The Smurfs - Flower Defense",
        type: "game",
        category: "new-releases",
        originalPrice: "$19.99",
        currentPrice: "$3.19",
        discount: "-84%",
        image: "/images/smurfs-flower-defense.png",
        url: "/games/smurfs-flower-defense.html",
        rating: "4.0",
        isFree: false
    },
    {
        name: "OVRDARK",
        type: "game",
        category: "new-releases",
        originalPrice: "$22.99",
        currentPrice: "$5.05",
        discount: "-78%",
        image: "/images/ovrdark.png",
        url: "/games/ovrdark.html",
        rating: "3.8",
        isFree: false
    },
    {
        name: "HexWind",
        type: "game",
        category: "new-releases",
        originalPrice: "$17.99",
        currentPrice: "$4.31",
        discount: "-76%",
        image: "/images/hexwind.png",
        url: "/games/hexwind.html",
        rating: "4.2",
        isFree: false
    },
    {
        name: "Zombie Army VR",
        type: "game",
        category: "new-releases",
        originalPrice: "$29.99",
        currentPrice: "$5.09",
        discount: "-83%",
        image: "/images/zombie-army-vr.png",
        url: "/games/zombie-army-vr.html",
        rating: "4.6",
        isFree: false
    },
    {
        name: "The Phoenix Gene",
        type: "game",
        category: "new-releases",
        originalPrice: "$18.99",
        currentPrice: "$3.98",
        discount: "-79%",
        image: "/images/phoenix-gene.png",
        url: "/games/phoenix-gene.html",
        rating: "3.7",
        isFree: false
    },
    {
        name: "The Break-In",
        type: "game",
        category: "new-releases",
        originalPrice: "$15.99",
        currentPrice: "$2.39",
        discount: "-85%",
        image: "/images/break-in.png",
        url: "/games/break-in.html",
        rating: "4.1",
        isFree: false
    },
    {
        name: "HARD BULLET",
        type: "game",
        category: "new-releases",
        originalPrice: "$21.99",
        currentPrice: "$4.39",
        discount: "-80%",
        image: "/images/hard-bullet.png",
        url: "/games/hard-bullet.html",
        rating: "4.4",
        isFree: false
    }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeMobileMenu();
    initializeNewsletter();
    initializeSearch();
    initializeAnimations();
    initializeGameCards();
});

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    const searchResults = document.getElementById('searchResults');
    const mainContent = document.getElementById('mainContent');
    const searchGrid = document.getElementById('searchGrid'); 
    const searchTitle = document.getElementById('searchTitle');
    const clearSearchBtn = document.getElementById('clearSearch');
    
    let searchTimeout;
    
    // Search input event listener
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            if (query.length === 0) {
                showMainContent();
                return;
            }
            
            // Debounce search for better performance
            searchTimeout = setTimeout(() => {
                performSearch(query);
            }, 300);
        });
        
        // Enter key support
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                clearTimeout(searchTimeout);
                const query = this.value.trim();
                if (query.length > 0) {
                    performSearch(query);
                }
            }
        });
    }
    
    // Search icon click
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query.length > 0) {
                performSearch(query);
            } else {
                searchInput.focus();
            }
        });
    }
    
    // Clear search button
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', function() {
            searchInput.value = '';
            showMainContent();
        });
    }
    
    function performSearch(query) {
        const results = searchGames(query);
        displaySearchResults(results, query);
    }
    
    function searchGames(query) {
        const searchTerm = query.toLowerCase();
        return gamesDatabase.filter(game => 
            game.name.toLowerCase().includes(searchTerm) ||
            game.type.toLowerCase().includes(searchTerm) ||
            game.category.toLowerCase().includes(searchTerm) ||
            (game.category === 'top-selling' && ('top'.includes(searchTerm) || 'selling'.includes(searchTerm) || 'bestseller'.includes(searchTerm) || 'popular'.includes(searchTerm))) ||
            (game.category === 'new-releases' && ('new'.includes(searchTerm) || 'release'.includes(searchTerm) || 'latest'.includes(searchTerm) || 'recent'.includes(searchTerm)))
        );
    }
    
    function displaySearchResults(results, query) {
        // Hide main content and show search results
        mainContent.style.display = 'none';
        searchResults.style.display = 'block';
        
        // Update search title
        searchTitle.textContent = `Search Results for "${query}" (${results.length} found)`;
        
        // Clear previous results
        searchGrid.innerHTML = '';
        
        if (results.length === 0) {
            displayNoResults(query);
            return;
        }
        
        // Display results
        results.forEach(game => {
            const gameCard = createGameCard(game);
            searchGrid.appendChild(gameCard);
        });
        
        // Scroll to search results
        searchResults.scrollIntoView({ behavior: 'smooth' });
    }
    
    function displayNoResults(query) {
        searchGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No results found</h3>
                <p>Sorry, we couldn't find any games or apps matching "${query}"</p>
                <p>Try searching for popular games like "Beat Saber", "Bonelab", "SUPERHOT", or browse our "Top Selling" and "New Releases" sections</p>
            </div>
        `;
    }
    
    function showMainContent() {
        searchResults.style.display = 'none';
        mainContent.style.display = 'block';
    }
}

// Create game card function
function createGameCard(game) {
    const cardElement = document.createElement('a');
    cardElement.href = game.url;
    cardElement.className = 'game-card';
    
    // Build rating HTML if rating exists
    let ratingHTML = '';
    if (game.rating) {
        const rating = parseFloat(game.rating);
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        ratingHTML = '<div class="rating">';
        
        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            ratingHTML += '<i class="fas fa-star"></i>';
        }
        
        // Add half star if needed
        if (hasHalfStar) {
            ratingHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        // Add empty stars to make 5 total
        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            ratingHTML += '<i class="far fa-star"></i>';
        }
        
        ratingHTML += `<span>${game.rating}</span></div>`;
    }
    
    // Build price HTML
    let priceHTML = '<div class="price-container">';
    if (game.isFree) {
        priceHTML += '<span class="price-current free">Free</span>';
    } else {
        if (game.originalPrice) {
            priceHTML += `<span class="price-original">${game.originalPrice}</span>`;
        }
        priceHTML += `<span class="price-current">${game.currentPrice}</span>`;
    }
    priceHTML += '</div>';
    
    // Build discount badge
    let discountHTML = '';
    if (game.discount) {
        discountHTML = `<div class="discount-badge">${game.discount}</div>`;
    }
    
    cardElement.innerHTML = `
        <div class="item-image">
            <img src="${game.image}" alt="${game.name}" onerror="this.style.display='none'">
            ${discountHTML}
        </div>
        <div class="item-info">
            <h3>${game.name}</h3>
            ${ratingHTML}
            ${priceHTML}
        </div>
    `;
    
    return cardElement;
}

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileNav.classList.remove('active');
                mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileNavLinks = mobileNav.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
}

// Game card interactions
function initializeGameCards() {
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        // Add hover effects for better interaction feedback
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Newsletter functionality
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const emailInput = document.querySelector('.email-input');
    const subscribeBtn = document.querySelector('.subscribe-btn');
    
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (!email) {
                showNotification('Please enter your email address', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Fake subscription
            handleFakeSubscription(email);
        });
    }
    
    // Enter key support
    if (emailInput) {
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeBtn.click();
            }
        });
    }
}

function handleFakeSubscription(email) {
    const subscribeBtn = document.querySelector('.subscribe-btn');
    const originalText = subscribeBtn.textContent;
    
    subscribeBtn.textContent = 'Subscribing...';
    subscribeBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Successfully subscribed! Welcome to Cheap Meta Keyz updates.', 'success');
        document.querySelector('.email-input').value = '';
        subscribeBtn.textContent = originalText;
        subscribeBtn.disabled = false;
    }, 1500);
}

// Animation and scroll effects
function initializeAnimations() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.featured-item, .popular-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        max-width: 350px;
        white-space: pre-line;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;
    
    // Set background color based on type
    const colors = {
        'success': '#27ae60',
        'error': '#e74c3c',
        'info': '#3498db',
        'warning': '#f39c12'
    };
    
    notification.style.background = colors[type] || colors['info'];
    notification.textContent = message;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
    
    // Click to dismiss
    notification.addEventListener('click', function() {
        this.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(this)) {
                document.body.removeChild(this);
            }
        }, 300);
    });
}

// Hero CTA button
document.addEventListener('click', function(e) {
    if (e.target.matches('.cta-button')) {
        e.preventDefault();
        showNotification('Loading all VR games and apps...', 'info');
        
        // Smooth scroll to top selling games
        setTimeout(() => {
            document.querySelector('.featured').scrollIntoView({
                behavior: 'smooth'
            });
        }, 1000);
    }
});

// Console log for debugging
console.log('Cheap Meta Keyz JavaScript loaded successfully');
console.log(`Database contains ${gamesDatabase.length} games and apps for search functionality`);
console.log('Categories available:', [...new Set(gamesDatabase.map(game => game.category))]);