import MessageList from "./MessageList";
import style from './SampleHomeBlock.module.scss'

export default function HomeBlock({ messages=[{name:'J. Doe', id:1, msg:'Hello! This is the first message.'}] }) {
    return (
        <>
        <div id={style.home}>
            <div className={style.sidebar}>Home<br/>More sidebar text</div>
            <div className={style.content}>
                <MessageList messages={messages} msgClass={style.message}/>
            </div>
        </div>
        </>
    )

}