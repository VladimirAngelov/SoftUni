function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commitsEl = document.getElementById('commits');

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(res.statusText);
        })
        .then(commitsData => {
            commitsEl.innerHTML = commitsData.map(x => `<li>${x.commit.author.name}: ${x.commit.message}</li>`).join('');
        })
        .catch(err => {
            commitsEl.innerHTML = `<li>${err}</li>`
        })
}