import styles from '../styles/'
import Image from 'next/image'

function AboutMe() {
    return (
        <>
            <div id="beginning">
                <h1 style={{textAlign: "center"}}>Kamil Mirgasimov</h1>
                <Image id="my-photo" src="/my_photo.jpg" alt="my-photo"></Image>
            </div>

            <div id="middle">
                <h1 className="heading">Hi there!</h1>
                <p className="text">I am second year bachelor student at <a href="https://innopolis.university">Innopolis
                    university</a>
                </p>
                <Image src="/innopolis.jpeg" className="images" alt="image of the Innopolis university"></Image>
                <hr/>

                <h1 className="heading">List of my projects</h1>
                <ul className="text">
                    <li><a href='https://github.com/Kamil116/FilmsApplication'>Films application.</a> Main functionality
                        is to fetch
                        information about films.
                    </li>
                    <li><a href="https://github.com/Kamil116/scheduler-backend_final">Telegram bot</a> for getting
                        notifications
                        about the studying schedule. It also includes daily, weekly and monthly schedules.
                    </li>
                    <li><a href="https://github.com/Kamil116/liceyproject">Web-site</a> for storing passwords</li>
                </ul>
                <Image src="/FilmsApllication_screenshot.png" alt="My iOS project" className="images"></Image>
                <hr/>

                <h1 className="heading">Skills</h1>
                <ul className="text">
                    <li>Programming languages:
                        <ul>
                            <li>Python (web, telegram bots development + a little bit of ML)</li>
                            <li>Basics of C, C++, Java</li>
                            <li>iOS development with Swift</li>
                        </ul>
                    </li>
                    <li>Databases:
                        <ul>
                            <li>PostgreSQL, MongoDB</li>
                        </ul>
                    </li>

                </ul>
                <Image src="/Python-logopng.png" className="images" alt="Python logo"></Image>
                <Image src="/swift-svgrepo-com.svg" className="images" alt="Swift logo"></Image>
                <hr/>
            </div>
        </>
    )
}

export default AboutMe