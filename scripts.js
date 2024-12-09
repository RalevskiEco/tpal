document.addEventListener('DOMContentLoaded', () => {
    // Eco Footprint Calculator Elements
    const transportationInput = document.getElementById('transportation');
    const energyInput = document.getElementById('energy');
    const wasteInput = document.getElementById('waste');
    const impactScoreElement = document.getElementById('impact-score');
    const impactFeedbackElement = document.getElementById('impact-feedback');
    const suggestedActionsElement = document.getElementById('suggested-actions');

    // Calculation and Feedback Functions
    const calculateEcoFootprint = (transportation, energy, waste) => {
        // More sophisticated calculation with weighted factors
        const transportationFactor = Math.min(transportation * 0.4, 100);
        const energyFactor = Math.min(energy * 0.35, 100);
        const wasteFactor = Math.min(waste * 0.25, 100);
        
        return (transportationFactor + energyFactor + wasteFactor) / 3;
    };

    const getFeedback = (score) => {
        if (score < 30) return 'Excellent! Your environmental impact is minimal.';
        if (score < 60) return 'Good job! There\'s room for improvement.';
        return 'Consider taking significant steps to reduce your environmental impact.';
    };

    const getSuggestedActions = (score) => {
        if (score < 30) return [
            'Continue your sustainable practices.',
            'Explore advanced eco-friendly technologies.',
            'Share your tips with others.'
        ];
        if (score < 60) return [
            'Use public transportation or carpool.',
            'Switch to energy-efficient appliances.',
            'Implement home recycling system.',
            'Reduce single-use plastic consumption.'
        ];
        return [
            'Drastically reduce carbon footprint.',
            'Invest in renewable energy solutions.',
            'Minimize waste through conscious consumption.',
            'Consider carbon offset programs.',
            'Educate yourself on sustainable living.'
        ];
    };

    // Update Calculator Functionality
    const updateCalculator = () => {
        const transportation = parseFloat(transportationInput.value) || 0;
        const energy = parseFloat(energyInput.value) || 0;
        const waste = parseFloat(wasteInput.value) || 0;

        const score = calculateEcoFootprint(transportation, energy, waste);
        
        impactScoreElement.textContent = score.toFixed(1);
        impactFeedbackElement.textContent = getFeedback(score);
        
        const suggestedActions = getSuggestedActions(score);
        suggestedActionsElement.innerHTML = suggestedActions
            .map(action => `<li>${action}</li>`)
            .join('');
    };

    // Event Listeners
    [transportationInput, energyInput, wasteInput].forEach(input => {
        input.addEventListener('input', updateCalculator);
    });

    // Update current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.addEventListener('DOMContentLoaded', () => {
        // Existing code...
    
        // Impact Simulation Functionality
        const simulateImpact = () => {
            const actionValue = parseInt(document.getElementById('action-select').value);
            if (actionValue > 0) {
                const currentScore = parseFloat(impactScoreElement.textContent);
                const newScore = Math.max(0, currentScore - actionValue);
                impactScoreElement.textContent = newScore.toFixed(1);
                impactFeedbackElement.textContent = getFeedback(newScore);
                const suggestedActions = getSuggestedActions(newScore);
                suggestedActionsElement.innerHTML = suggestedActions
                    .map(action => `<li>${action}</li>`)
                    .join('');
                document.getElementById('simulation-result').textContent = `Your new impact score is ${newScore.toFixed(1)}.`;
            } else {
                document.getElementById('simulation-result').textContent = 'Please select a valid action.';
            }
        };
    
        document.getElementById('simulate-button').addEventListener('click', simulateImpact);
    
        // Existing code...
    });
    // Chart.js Visualizations
    const createAirQualityChart = () => {
        const ctx = document.getElementById('airQualityChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Air Quality Index',
                    data: [65, 59, 80, 81, 56, 55],
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Monthly Air Quality Trends'
                    }
                }
            }
        });
    };

    const createWaterPollutionChart = () => {
        const ctx = document.getElementById('waterPollutionChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Region A', 'Region B', 'Region C', 'Region D', 'Region E'],
                datasets: [{
                    label: 'Water Pollution Levels',
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Regional Water Pollution Comparison'
                    }
                }
            }
        });
    };

    // Initialize Charts
    createAirQualityChart();
    createWaterPollutionChart();

    // Initial calculator update
    updateCalculator();
});
document.addEventListener('DOMContentLoaded', () => {
    // Eco Footprint Calculator Elements
    const transportationInput = document.getElementById('transportation');
    const energyInput = document.getElementById('energy');
    const wasteInput = document.getElementById('waste');
    const impactScoreElement = document.getElementById('impact-score');
    const impactFeedbackElement = document.getElementById('impact-feedback');
    const suggestedActionsElement = document.getElementById('suggested-actions');

    const calculateEcoFootprint = (transportation, energy, waste) => {
        const transportationFactor = Math.min(transportation * 0.4, 100);
        const energyFactor = Math.min(energy * 0.35, 100);
        const wasteFactor = Math.min(waste * 0.25, 100);
        return (transportationFactor + energyFactor + wasteFactor) / 3;
    };

    const getFeedback = (score) => {
        if (score < 30) return 'Excellent! Your environmental impact is minimal.';
        if (score < 60) return 'Good job! There\'s room for improvement.';
        return 'Consider taking significant steps to reduce your environmental impact.';
    };

    const getSuggestedActions = (score) => {
        if (score < 30) return ['Maintain sustainable practices.', 'Explore eco-friendly technologies.'];
        if (score < 60) return ['Carpool or use public transport.', 'Switch to energy-efficient appliances.'];
        return ['Invest in renewable energy.', 'Drastically reduce waste.'];
    };

    const updateCalculator = () => {
        const transportation = parseFloat(transportationInput.value) || 0;
        const energy = parseFloat(energyInput.value) || 0;
        const waste = parseFloat(wasteInput.value) || 0;

        const score = calculateEcoFootprint(transportation, energy, waste);
        impactScoreElement.textContent = score.toFixed(1);
        impactFeedbackElement.textContent = getFeedback(score);

        const suggestedActions = getSuggestedActions(score);
        suggestedActionsElement.innerHTML = suggestedActions.map(action => `<li>${action}</li>`).join('');
    };

    [transportationInput, energyInput, wasteInput].forEach(input => {
        input.addEventListener('input', updateCalculator);
    });

    // Initialize Pollution Map (placeholder)
    const initMap = async () => {
        const mapContainer = document.getElementById('map-container');
    
        // Initialize the map using Leaflet.js
        const map = L.map(mapContainer).setView([20, 0], 2); // Center map at lat: 20, lon: 0
    
        // Add a tile layer (map base)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    
        // Define coordinates for fetching pollution data (example: multiple cities)
        const locations = [
            { lat: 41.9981, lon: 21.4254, name: 'Skopje' },    // North Macedonia
            { lat: 46.0569, lon: 14.5058, name: 'Ljubljana' }, // Slovenia
            { lat: 41.3275, lon: 19.8189, name: 'Tirana' },    // Albania
            { lat: 42.6629, lon: 21.1655, name: 'Pristina' },  // Kosovo
            { lat: 48.8566, lon: 2.3522, name: 'Paris' },      // France
            { lat: 52.5200, lon: 13.4050, name: 'Berlin' },    // Germany
            { lat: 41.9028, lon: 12.4964, name: 'Rome' },      // Italy
            { lat: 40.4168, lon: -3.7038, name: 'Madrid' },    // Spain
            { lat: 50.8503, lon: 4.3517, name: 'Brussels' },   // Belgium
            { lat: 59.9139, lon: 10.7522, name: 'Oslo' },      // Norway
            { lat: 48.2082, lon: 16.3738, name: 'Vienna' },    // Austria
            { lat: 60.1692, lon: 24.9402, name: 'Helsinki' },  // Finland
            { lat: 55.7558, lon: 37.6173, name: 'Moscow' },    // Russia
            { lat: 52.3667, lon: 9.7167, name: 'Hamburg' },    // Germany
            { lat: 51.1657, lon: 10.4515, name: 'Berlin' },    // Germany
            { lat: 53.3498, lon: -6.2603, name: 'Dublin' },    // Ireland
            { lat: 52.3676, lon: 4.9041, name: 'Amsterdam' },  // Netherlands
            { lat: 43.6349, lon: 1.4445, name: 'Toulouse' },   // France
            { lat: 60.1692, lon: 24.9402, name: 'Helsinki' },  // Finland
            { lat: 51.5074, lon: -0.1278, name: 'London' },    // United Kingdom
            { lat: 41.9028, lon: 12.4964, name: 'Rome' },      // Italy
            { lat: 52.2298, lon: 21.0118, name: 'Warsaw' },    // Poland
            { lat: 55.6761, lon: 12.5683, name: 'Copenhagen' },// Denmark
            { lat: 48.1351, lon: 11.5820, name: 'Munich' },    // Germany
            { lat: 43.6349, lon: 1.4445, name: 'Toulouse' },   // France
            { lat: 59.9139, lon: 10.7522, name: 'Oslo' },      // Norway
            { lat: 48.2082, lon: 16.3738, name: 'Vienna' },    // Austria
            { lat: 55.7558, lon: 37.6173, name: 'Moscow' }     // Russia
        ];



        const apiKey = '00ded86dab065447e531e0c1b9bc9b1f';
    
        try {
            for (const location of locations) {
                const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`;
                const response = await fetch(url);
                const data = await response.json();
    
                if (data && data.list && data.list.length > 0) {
                    const aqi = data.list[0].main.aqi; // Air Quality Index
                    const aqiDescription = getAQIDescription(aqi);
    
                    // Add marker to the map
                    L.marker([location.lat, location.lon]).addTo(map)
                        .bindPopup(`<strong>${location.name}</strong><br>Air Quality Index: ${aqi} (${aqiDescription})`)
                        .openPopup();
                }
            }
        } catch (error) {
            console.error('Error fetching pollution data:', error);
            mapContainer.innerHTML = '<p class="text-center text-red-600">Failed to load map. Try again later.</p>';
        }
    };
    
    // Helper function to interpret AQI levels
    const getAQIDescription = (aqi) => {
        switch (aqi) {
            case 1: return 'Good';
            case 2: return 'Fair';
            case 3: return 'Moderate';
            case 4: return 'Poor';
            case 5: return 'Very Poor';
            default: return 'Unknown';
        }
    };
    

    // Fetch News Articles
    const fetchNews = async () => {
        const newsFeed = document.getElementById('news-feed');
        try {
            const response = await fetch('https://newsapi.org/v2/everything?q=ecology&apiKey=252fafbc13ed4bb7a8292b6cc3f3a8d1');
            const data = await response.json();
            newsFeed.innerHTML = data.articles.slice(0, 6).map(article => `
                <div class="news-card">
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            `).join('');
        } catch (error) {
            newsFeed.innerHTML = '<p class="text-center text-red-600">Failed to load news. Try again later.</p>';
        }
    };

    // Initialize Features
    initMap();
    fetchNews();
});
