import {differenceInDays} from 'date-fns';

const getJokeBtn: HTMLButtonElement = document.getElementById('get-joke-btn') as HTMLButtonElement;
const joke_title: HTMLHeadingElement = document.getElementById('joke-title') as HTMLHeadingElement;
const joke_image: HTMLImageElement = document.getElementById('joke_image') as HTMLImageElement;
const joke_text: HTMLHeadingElement = document.getElementById('joke_text') as HTMLHeadingElement;
const laughing: HTMLImageElement = document.getElementById('laughing_guy') as HTMLImageElement;
const joke_date: HTMLHeadingElement = document.getElementById('joke-date') as HTMLHeadingElement


interface JokeIdResponse {
    jokeId: number;
}

// Fetching the XKCD comic identifier using the email query parameter.
function fetchJokeId(): Promise<JokeIdResponse> {
    const params = new URLSearchParams();
    params.append('email', 'k.mirgasimov@innopolis.university');
    return fetch('https://fwd.innopolis.university/api/hw2?' + params.toString()).then(r => r.json());
}


// Using the obtained identifier to request the comic from the API.
function fetchJoke(joke_id: number): Promise<Joke> {
    const params = new URLSearchParams();
    params.append('id', String(joke_id));
    return fetch('https://fwd.innopolis.university/api/comic?' + params.toString()).then(r => r.json());
}

// Displaying the comic image, the title and the date.
function handleJoke(joke: Joke): void {
    const image: string = joke.img
    const title: string = joke.safe_title
    let dateObj: Date = new Date(Number(joke['year']), Number(joke['month']), Number(joke['day']));

    joke_title.textContent = title;

    joke_date.textContent = 'The comic was released ' +  differenceInDays(Date(), dateObj) + ' days ago';
    joke_date.style.display = 'block'
    joke_date.style.color = 'green'

    joke_image.src = image;
    joke_image.style.display = 'block';

    laughing.style.display = 'block';

    joke_text.textContent = 'Date: ' + dateObj.toLocaleDateString();
    joke_text.style.display = 'block';
}

interface Joke {
    safe_title: string;
    img: string;
    day: string,
    month: string,
    year: string
}

getJokeBtn.addEventListener('click', async function (e) {
    joke_title.style.display = 'block';
    joke_title.textContent = 'Loading...';
    let joke_id: number = await fetchJokeId().then();
    const joke: Joke = await fetchJoke(joke_id);
    handleJoke(joke);
});
