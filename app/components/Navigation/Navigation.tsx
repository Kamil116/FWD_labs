import styles from '@/app/components/Navigation/navigation.module.css'
import Link from "next/link";

export default function Nav() {
    return (
        <>
            <div className={styles.topnav}>
                <Link href={'/about'}>
                    About me
                </Link>
                <Link href={'/jokes'}>
                    Jokes
                </Link>
            </div>
        </>
    )
}