function attachEvents() {
    const baseUrl = 'https://blog-apps-c12bf.firebaseio.com/'
    const loadPostsEl = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');
    const postsEl = document.getElementById('posts');
    const postComments = document.getElementById('post-comments');
    const postBody = document.getElementById('post-body');

    loadPostsEl.addEventListener('click', () => {
        fetch(`${baseUrl}/posts.json`)
            .then(res => res.json())
            .then(data => {
                let options = Object.keys(data).map(key => `<option value="${key}">${data[key].title}</option>`).join('');
                postsEl.innerHTML = options;
            })
    })

    viewBtn.addEventListener('click', () => {
        let url = `https://blog-apps-c12bf.firebaseio.com/posts/${postsEl.value}.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const h1El = document.getElementById('post-title');
                h1El.textContent = data.title;

                postBody.innerHTML = data.body;

                let output = data.comments.reduce((acc, val) => {
                    acc.push(`<li id="${val.id}">${val.text}</li>`);
                    return acc;
                }, [])
                postComments.innerHTML = output.join('\n')
            });
    })
}

attachEvents();