//Project imports
import styles from '../styles/Navigation.module.scss';
import SakuraParticles from './SakuraParticles';
import { HomeSvg, ClipsSvg, MessagesSvg, SoundboardSvg, CreditsSvg } from './Navigation/NavigationList';

enum CircleX {
    Home = 208,
    Clips = 291,
    Messages = 374,
    Soundboard = 457,
    Credits = 540
}

interface NavProps {
    title: string,
    page: string
}

function Navigation({ title, page }:NavProps) {
    return (
    <div className={styles.navigation}>
        <div className={styles.name}>
            <svg viewBox="0 0 431 221" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M0 221V0H395L340.571 131.04L0 221Z" fill="#FF7B39" fillOpacity="0.61"/>
                    <path d="M-26 198V-29H431L378.5 105.598L-26 198Z" fill="#FF7B39"/>
                </g>
                <text x="40%" y="50%" dominantBaseline="middle" textAnchor="middle">
                    桐生ココ
                </text>
            </svg>
        </div>
        <div className={styles.navigators}>
            <svg viewBox="0 0 631 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M42 0H642V108.898L196.889 126L42 0Z" fill="#FF7B39" fillOpacity="0.57"/>
                    <path d="M0 -20H650V88.8983L145.013 106L0 -20Z" fill="#FF7B39" />
                </g>   
                <g>
                    <HomeSvg x="189" y="26" href="/" />
                    <ClipsSvg x="266" y="21" href="/clips" />
                    <MessagesSvg x="349" y="21" href="/messages" />
                    <SoundboardSvg x="432" y="21" href="/soundboard" />
                    <CreditsSvg x="515" y="21" href="/credits" />
                </g>
                <circle cx={CircleX[page]} cy="79" r="5" fill="white"/>
            </svg>
        </div>
        <div className={styles.title}>
            <svg viewBox="0 0 763 221" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M0 198L11.5157 0L709.969 29.7L733 140.766L0 198Z" fill="#FF7B39" fillOpacity="0.63"/>
                    <path d="M15 221L26.7514 23L739.497 52.7L763 163.766L15 221Z" fill="#FF7B39" />
                </g>
                <text x="38" y="140">{title}</text>
            </svg>
        </div>
        <div className={styles.image}>

        </div>
        <SakuraParticles />
    </div>)
}

export default Navigation