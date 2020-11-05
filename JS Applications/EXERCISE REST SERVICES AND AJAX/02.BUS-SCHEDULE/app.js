function solve() {

    const info = document.getElementById('info');
    const url = `https://judgetests.firebaseio.com/schedule/`;
    let stopId = 'depot'
    let stopName = '';

    function depart() {
        fetch(url + stopId + '.json')
            .then(res => res.json())
            .then(data => {
                info.textContent = `Next stop ${data.name}`;
                stopId = data.next;
                stopName = data.name

                document.getElementById('arrive').disabled = false;
                document.getElementById('depart').disabled = true;
            })
    }

    function arrive() {
        info.textContent = `Arrive ${stopName}`;
        document.getElementById('arrive').disabled = true;
        document.getElementById('depart').disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();