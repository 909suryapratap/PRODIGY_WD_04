async function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = 'weatherapikey';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    
    const data = await response.json();
    
    if (data.cod === 200) {
        document.getElementById('weather-result').innerHTML = `
            <p><strong>${data.name}</strong>: ${data.weather[0].description}, ${data.main.temp}°C</p>`;
        
        const hour = new Date().getHours();
        const isDayTime = hour > 6 && hour < 18;
        
        if (isDayTime) {
            document.getElementById('day-sound').play();
        } else {
            document.getElementById('night-sound').play();
        }
    } else {
        document.getElementById('weather-result').innerHTML = '<p>Location not found.</p>';
    }
}

