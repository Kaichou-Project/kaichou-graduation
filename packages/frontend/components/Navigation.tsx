//Project imports
import styles from '../styles/Navigation.module.scss';
import NavigationItem from './Navigation/NavigationItem';

interface NavProps {
    title: string
}

function Navigation({ title }:NavProps) {
    return (
    <div className={styles.navigation}>
        <div>
            <h1>桐生ココ</h1>
        </div>
        <div className={styles.navigators}>
            <NavigationItem style={styles.homeBtn} href="/" />
            <NavigationItem style={styles.clipsBtn} href="/clips" />
            <NavigationItem style={styles.messagesBtn} href="/messages"/>
            <NavigationItem style={styles.soundboardBtn} href="/soundboard" />
            <NavigationItem style={styles.creditsBtn} href="/credits" />
        </div>
        <div>
            <h1>{title}</h1>
        </div>
    </div>)
}

export default Navigation