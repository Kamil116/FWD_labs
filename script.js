//
// getJokeBtn.addEventListener('click', async function (e) {
//     const joke = await fetchSomeJoke();
//     handleOnePartJoke(joke);
// });

const getJokeBtn = document.getElementById('get-joke-btn');
const joke_title = document.getElementById('joke-title');
const joke_image = document.getElementById('joke_image');
const joke_text = document.getElementById('joke_text');
const laughing = document.getElementById('laughing_guy');


// Fetching the XKCD comic identifier using the email query parameter.
function fetchJokeId() {
    const params = new URLSearchParams();
    params.append('email', 'k.mirgasimov@innopolis.university');
    return fetch('https://fwd.innopolis.university/api/hw2?' + params.toString()).then(r => r.json());
}

// Using the obtained identifier to request the comic from the API.
function fetchJoke(joke_id) {
    const params = new URLSearchParams();
    params.append('id', joke_id);
    return fetch('https://fwd.innopolis.university/api/comic?' + params.toString()).then(r => r.json());
}

// Displaying the comic image, the title and the date.
function handleJoke(joke) {
    const image = joke['img'];
    const title = joke['safe_title'];
    let dateObj = new Date(joke['year'], joke['month'], joke['day']);

    joke_title.textContent = title;
    joke_title.style.display = 'block';
    joke_image.src = image;
    joke_image.style.display = 'block';
    laughing.style.display = 'block';
    joke_text.textContent = 'Date: ' + dateObj.toLocaleDateString();
    joke_text.style.display = 'block'
}

getJokeBtn.addEventListener('click', async function (e) {
    joke_title.textContent = 'Loading...';
    fetchJokeId().then(fetchJoke).then(handleJoke);
});

