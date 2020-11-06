function attachEvents() {
    const baseUrl = `https://judgetests.firebaseio.com/locations.json`;
    const locationEl = document.getElementById('location');
    const weatherBtn = document.getElementById('submit');
    const forecastParentDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    const createElements = (type, classes, content) => {
        let element = document.createElement(type)
        element.className = classes;
        element.innerHTML = content;

        return element;
    }

    const symbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176',
    }

    weatherBtn.addEventListener('click', () => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                let {code} = data.find(city => city.name === locationEl.value);
                let forecastUrl = `https://judgetests.firebaseio.com/forecast/today/${code}.json`;
                let upcomingUrl = `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`;

                let current = fetch(forecastUrl)
                    .then(res => res.json());

                let upcoming = fetch(upcomingUrl)
                    .then(res => res.json());

                Promise.all([current, upcoming])
                    .then(showForecast)
                    .catch(err => {
                        forecastParentDiv.textContent = 'Error';
                    })
            })
    })

    function showForecast([current, upcoming]) {
        showCurrent(current);
        showThreeDaysForecast(upcoming);
    }

    function showCurrent(current) {
        let forecastDiv = createElements('div', 'forecast-info', '');
        let currentSymbol = symbols[current.forecast.condition];
        let conditionSpan = createElements('span', 'condition symbol', currentSymbol);
        let conditionInfoSpan = createElements('span', 'condition', '');

        let forecastCity = createElements('span', 'forecast-data', current.name)
        let forecastCondition = createElements('span', 'forecast-data', current.forecast.condition);

        let temperature = `${current.forecast.low}${symbols.Degrees}/${current.forecast.high}${symbols.Degrees}`;
        let forecastTemperature = createElements('span', 'forecast-data', temperature);

        forecastDiv.appendChild(conditionSpan);
        conditionInfoSpan.appendChild(forecastCity);
        conditionInfoSpan.appendChild(forecastTemperature);
        conditionInfoSpan.appendChild(forecastCondition);
        forecastDiv.appendChild(conditionInfoSpan);
        currentDiv.appendChild(forecastDiv);

        forecastParentDiv.style.display = 'block';
    }

    function showThreeDaysForecast(upcoming) {
        let forecastDivInfo = createElements('div', 'forecast-info', '');
        upcoming.forecast.forEach(line => {
            let upcomingSpan = createElements('span', 'upcoming', '');
            let conditionSpan = createElements('span', 'symbol', symbols[line.condition])
            let temperature = `${line.low}${symbols.Degrees}/${line.high}${symbols.Degrees}`;
            let forecastTemperature = createElements('span', 'forecast-data', temperature);
            let forecastCondition = createElements('span', 'forecast-data', line.condition);

            upcomingSpan.appendChild(conditionSpan);
            upcomingSpan.appendChild(forecastTemperature);
            upcomingSpan.appendChild(forecastCondition);
            forecastDivInfo.appendChild(upcomingSpan)
        })
        upcomingDiv.appendChild(forecastDivInfo);
    }
}

attachEvents();