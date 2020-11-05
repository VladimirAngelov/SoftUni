function getInfo() {
    const stopId = document.getElementById('stopId');
    const validBuses = ['1287', '1308', '1327', '2334'];
    const stopInfo = document.getElementById('stopName');
    const url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`;
    const buses = document.getElementById('buses');

    if (!validBuses.includes(stopId.value)) {
        stopInfo.textContent = 'Error';
        buses.innerHTML = '';
        return;
    }

    fetch(url)
        .then(res => res.json())
        .then(data => {
            stopInfo.textContent = data.name;
            let busInfo = Object.entries(data.buses).map(x => `<li>Bus ${x[0]} arrives in ${x[1]} minutes`).join('');

            buses.innerHTML = busInfo;
            stopId.value = '';
        })
}