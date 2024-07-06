import './Jokes.css'
import {differenceInDays} from 'date-fns';
import {useState} from "react";

function Jokes() {
    const [jokeTitleClass, setJokeTitleClass] = useState('joke_title_before');
    const [jokeImageClass, setJokeImageClass] = useState('joke_image_before');
    const [jokeTextClass, setJokeTextClass] = useState('joke_text_before');
    const [laughingGuyClass, setLaughingGuyClass] = useState('laughing_guy_before');
    const [jokeDateClass, setJokeDateClass] = useState('joke_date_before');
    const [jokeImageSource, setJokeImageSource] = useState('');
    const [jokeTitleText, setJokeTitleText] = useState('');
    const [jokeTextText, setJokeTextText] = useState('');
    const [jokeDateText, setJokeDateText] = useState('')


    async function getJoke() {
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
            const dateObj: Date = new Date(Number(joke['year']), Number(joke['month']), Number(joke['day']));

            setJokeTitleText(title);

            setJokeImageClass('joke_image_after');
            setJokeImageSource(image);

            setJokeDateText('The comic was released ' + differenceInDays(new Date(), dateObj) + ' days ago');
            setJokeDateClass('joke_date_after');

            setLaughingGuyClass('laughing_guy_after');

            setJokeTextText('Date: ' + dateObj.toLocaleDateString());
            setJokeTextClass('joke_text_after');
        }

        interface Joke {
            safe_title: string;
            img: string;
            day: string,
            month: string,
            year: string
        }

        // joke_title_style = {
        //     display: 'block'
        // }
        setJokeTitleText('Loading...');
        setJokeTitleClass('joke_title_after');
        const joke_id: number = await fetchJokeId().then();
        const joke: Joke = await fetchJoke(joke_id);
        handleJoke(joke);
    }

    return (
        <>
            <div id="main-content">
                <div>
                    <h1>Jokes</h1>
                </div>
                <div>
                    <button id="get-joke-btn" onClick={getJoke}>Get a joke</button>
                </div>
                <div>
                    <h3 id="joke-title" className={jokeTitleClass}>{jokeTitleText}</h3>
                </div>
                <div>
                    <img id="joke_image" alt="joke" src={jokeImageSource} className={jokeImageClass}/>
                    <h2 id="joke_text" className={jokeTextClass}>{jokeTextText}</h2>
                    <h3 id="joke-date" className={jokeDateClass}>{jokeDateText}</h3>
                </div>
                <img id="laughing_guy" alt="laughing guy" src="/laughing-gif-asian-guy-pfft.gif"
                     className={laughingGuyClass}/>
            </div>
        </>
    )
}


export default Jokes