import styles from '@/app/components/Navigation/navigation.module.css'

export default function Nav() {
    return (
        <>
            <div className={styles.topnav}>
                <a href={'/about'}>About me</a>
                <a href={'/jokes'}>Jokes</a>
            </div>
        </>
    )
}