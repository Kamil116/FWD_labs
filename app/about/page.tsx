import styles from './page.module.css'
import Image from 'next/image'

function AboutMe() {
    return (
        <>
            <div className={styles.beginning}>
                <h1 style={{textAlign: "center"}}>Kamil Mirgasimov</h1>
                <Image className={styles.my_photo} src="/my_photo.jpg" alt="my-photo"
                       width={150} height={150}>
                </Image>
            </div>

            <div className={styles.middle}>
                <h1 className={styles.heading}>Hi there!</h1>
                <p className={styles.text}>I am second year bachelor student at <a href="https://innopolis.university">Innopolis
                    university</a>
                </p>
                <Image width={0} height={0} src="/innopolis.jpeg" className={styles.images}
                       alt="image of the Innopolis university"></Image>
                <hr/>

                <h1 className={styles.heading}>List of my projects</h1>
                <ul className={styles.text}>
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
                <Image width={0} height={0} src="/FilmsApllication_screenshot.png"
                       alt="My iOS project" className={styles.images}></Image>
                <hr/>

                <h1 className={styles.heading}>Skills</h1>
                <ul className={styles.text}>
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
                <Image width={0} height={0} src="/Python-logopng.png" className={styles.images}
                       alt="Python logo"></Image>
                <Image width={0} height={0} src="/swift-svgrepo-com.svg" className={styles.images}
                       alt="Swift logo"></Image>
                <hr/>
            </div>
        </>
    )
}

export default AboutMe