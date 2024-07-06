'use client'
import styles from '@/app/components/Footer/footer.module.css'

export default function Footer() {
    return (
        <div className={styles.ending}>
            <h1 className={styles.heading}>How to reach me out:</h1>
            <div style={{ paddingLeft: '8em' }} className={styles.footer_links}>
                <div>
                    <a href="https://t.me/mirgasimovk">
                        <img
                            src="/telegram.png"
                            className={styles.tg_link}
                            alt="telegram contact"
                        />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Kamil116">
                        <img
                            src="/github-mark.png"
                            className={styles.gh_link}
                            alt="github link"
                        />
                    </a>
                </div>
                <div>
                    <a href="mailto:k.mirgasimov@innopolis.university">
                        <img
                            src="/email-svgrepo-com.svg"
                            className={styles.email}
                            alt="email"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
