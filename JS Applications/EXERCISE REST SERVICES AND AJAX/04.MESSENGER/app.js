function attachEvents() {
    const sendBtn = document.getElementById('submit');
    const url = `https://rest-messanger.firebaseio.com/messanger.json`;
    const nameEl = document.getElementById('author');
    const messageEl = document.getElementById('content');
    const refreshBtn = document.getElementById('refresh');
    const textArea = document.getElementById('messages');

    sendBtn.addEventListener('click', () => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify({author: nameEl.value, content: messageEl.value})
        })
        nameEl.value = ''; messageEl.value = '';
    });

    refreshBtn.addEventListener('click', () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let output = Object.values(data).reduce((acc, val)=> {
                    acc.push(`${val.author}: ${val.content}`);
                    return acc;
                }, []);

                textArea.textContent = output.join('\n');
            })
    });
}

attachEvents();