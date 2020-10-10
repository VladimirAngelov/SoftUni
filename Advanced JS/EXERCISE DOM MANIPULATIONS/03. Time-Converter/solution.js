function attachEventsListeners() {
    let daysInput = document.getElementById('days')
    let hoursInput = document.getElementById('hours')
    let minutesInput = document.getElementById('minutes')
    let secondsInput = document.getElementById('seconds')

    document.getElementsByTagName('main')[0]
        .addEventListener('click', (e) => {
            if (e.target.value === 'Convert') {
                let time = e.target.parentElement.firstElementChild.textContent;

                if (time === 'Days: ') {
                    hoursInput.value = `${daysInput.value * 24}`;
                    minutesInput.value = `${daysInput.value * 1440}`;
                    secondsInput.value = `${daysInput.value * 86400}`;
                } else if (time === 'Hours: ') {
                    daysInput.value = `${hoursInput.value / 24}`;
                    minutesInput.value = `${hoursInput.value * 60}`;
                    secondsInput.value = `${hoursInput.value * 3600}`;
                } else if (time === 'Minutes: ') {
                    daysInput.value = `${minutesInput.value / 1440}`
                    hoursInput.value = `${minutesInput.value / 60}`
                    secondsInput.value = `${minutesInput.value * 60}`
                } else if (time === 'Seconds: ') {
                    daysInput.value = `${secondsInput.value / 86400}`
                    hoursInput.value = `${secondsInput.value / 3600}`
                    minutesInput.value = `${secondsInput.value / 60}`
                }
            }
        })
}