"use client";

import {differenceInDays} from 'date-fns';
import {useState} from "react";
import styles from './page.module.css'

function Jokes() {
    const [jokeTitleClass, setJokeTitleClass] = useState(styles.joke_title_before);
    const [jokeImageClass, setJokeImageClass] = useState(styles.joke_image_before);
    const [jokeTextClass, setJokeTextClass] = useState(styles.joke_text_before);
    const [laughingGuyClass, setLaughingGuyClass] = useState(styles.laughing_guy_before);
    const [jokeDateClass, setJokeDateClass] = useState(styles.joke_date_before);
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

            setJokeImageClass(styles.joke_image_after);
            setJokeImageSource(image);

            setJokeDateText('The comic was released ' + differenceInDays(new Date(), dateObj) + ' days ago');
            setJokeDateClass(styles.joke_date_after);

            setLaughingGuyClass(styles.laughing_guy_after);

            setJokeTextText('Date: ' + dateObj.toLocaleDateString());
            setJokeTextClass(styles.joke_text_after);
        }

        interface Joke {
            safe_title: string;
            img: string;
            day: string,
            month: string,
            year: string
        }

        setJokeTitleClass('joke_title_after');
        setJokeTitleText('Loading...');
        const joke_id: number = await fetchJokeId().then();
        const joke: Joke = await fetchJoke(joke_id);
        handleJoke(joke);
    }

    return (
        <>
            <div className={styles.main_content}>
                <div>
                    <h1 style={{paddingTop: "1em"}}>Jokes</h1>
                </div>
                <div>
                    <button className={styles.getJokeBtn} onClick={getJoke}>Get a joke</button>
                </div>
                <div>
                    <h3 className={`${jokeTitleClass} ${styles.jokeTitle}`}>{jokeTitleText}</h3>
                </div>
                <div>
                    <img alt="joke" src={jokeImageSource} className={jokeImageClass}/>
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