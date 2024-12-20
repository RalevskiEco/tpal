document.addEventListener('DOMContentLoaded', () => {
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

    [transportationInput, energyInput, wasteInput].forEach(input => {
        input.addEventListener('input', updateCalculator);
    });

    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.addEventListener('DOMContentLoaded', () => {
    
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
    
    });
    
    updateCalculator();
});
document.addEventListener('DOMContentLoaded', () => {
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

    const initMap = async () => {
        const mapContainer = document.getElementById('map-container');
    
        const map = L.map(mapContainer).setView([20, 0], 2); 

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    
        const locations = [
            { lat: 41.9981, lon: 21.4254, name: 'Skopje' },   
            { lat: 46.0569, lon: 14.5058, name: 'Ljubljana' }, 
            { lat: 41.3275, lon: 19.8189, name: 'Tirana' },    
            { lat: 42.6629, lon: 21.1655, name: 'Pristina' },  
            { lat: 48.8566, lon: 2.3522, name: 'Paris' },     
            { lat: 52.5200, lon: 13.4050, name: 'Berlin' },    
            { lat: 41.9028, lon: 12.4964, name: 'Rome' },      
            { lat: 40.4168, lon: -3.7038, name: 'Madrid' },   
            { lat: 50.8503, lon: 4.3517, name: 'Brussels' },   
            { lat: 59.9139, lon: 10.7522, name: 'Oslo' },     
            { lat: 48.2082, lon: 16.3738, name: 'Vienna' },    
            { lat: 60.1692, lon: 24.9402, name: 'Helsinki' },  
            { lat: 55.7558, lon: 37.6173, name: 'Moscow' },    
            { lat: 52.3667, lon: 9.7167, name: 'Hamburg' },    
            { lat: 51.1657, lon: 10.4515, name: 'Berlin' },    
            { lat: 53.3498, lon: -6.2603, name: 'Dublin' },    
            { lat: 52.3676, lon: 4.9041, name: 'Amsterdam' },  
            { lat: 43.6349, lon: 1.4445, name: 'Toulouse' },  
            { lat: 60.1692, lon: 24.9402, name: 'Helsinki' },  
            { lat: 51.5074, lon: -0.1278, name: 'London' },    
            { lat: 41.9028, lon: 12.4964, name: 'Rome' },      
            { lat: 52.2298, lon: 21.0118, name: 'Warsaw' },    
            { lat: 55.6761, lon: 12.5683, name: 'Copenhagen'} ,
            { lat: 48.1351, lon: 11.5820, name: 'Munich' },    
            { lat: 43.6349, lon: 1.4445, name: 'Toulouse' },   
            { lat: 59.9139, lon: 10.7522, name: 'Oslo' },      
            { lat: 48.2082, lon: 16.3738, name: 'Vienna' },    
            { lat: 55.7558, lon: 37.6173, name: 'Moscow' }     
        ];



        const apiKey = '502aa99f2e9fd89a656f67ce11c616b9';
    
        try {
            for (const location of locations) {
                const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`;
                const response = await fetch(url);
                const data = await response.json();
    
                if (data && data.list && data.list.length > 0) {
                    const aqi = data.list[0].main.aqi; 
                    const aqiDescription = getAQIDescription(aqi);
    
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
    

    const fetchNews = async () => {
        const newsFeed = document.getElementById('news-feed');
        const apiKey = 'bf729c8658cbff8ced30e6fb2e754c9d'; 
        const query = 'ecology,nature,environment,sustainability'; 
        const url = `https://api.mediastack.com/v1/news?access_key=${apiKey}&languages=en&keywords=${encodeURIComponent(query)}&limit=6`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.data && data.data.length > 0) {
                newsFeed.innerHTML = data.data.map(article => `
                <div class="news-card">
                    <h3>${article.title || 'No title available'}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            `).join('');
            } else {
                newsFeed.innerHTML = '<p class="text-center text-red-600">No news articles found.</p>';
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            newsFeed.innerHTML = '<p class="text-center text-red-600">Failed to load news. Try again later.</p>';
        }
    };


    initMap();
    fetchNews();
});
