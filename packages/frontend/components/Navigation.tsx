//React imports
//Project imports
import styles from '../styles/Navigation.module.scss';
import NavigationItem from './Navigation/NavigationItem';

function Navigation() {
    return (
    <div className={styles.navigation}>
        <div>
            <h1>桐生ココ</h1>
        </div>
        <div className={styles.navigators}>
            <NavigationItem style={styles.homeBtn} />
            <NavigationItem style={styles.clipsBtn} />
            <NavigationItem style={styles.messagesBtn} />
            <NavigationItem style={styles.soundboardBtn} />
            <NavigationItem style={styles.creditsBtn} />
        </div>
        <div>
            <h1>Graduation of Kiryu Coco</h1>
        </div>
    </div>)
}

export default Navigation