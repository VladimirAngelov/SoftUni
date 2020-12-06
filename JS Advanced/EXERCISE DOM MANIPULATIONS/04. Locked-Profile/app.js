function lockedProfile() {
    Array.from(document.getElementsByClassName('profile')).forEach(user => {
        let button = user.querySelectorAll('button')[0];

        button.addEventListener('click', () => {
            let userStatus = user.querySelectorAll('input')[1].checked;
            let hiddenText = user.querySelectorAll('div')[0];

            if (userStatus) {
                let buttonText = button.textContent;

                if (buttonText === 'Show more') {
                    hiddenText.style.display = 'block';
                    button.textContent = 'Hide it';
                } else if (buttonText === 'Hide it') {
                    hiddenText.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        })
    });
}
