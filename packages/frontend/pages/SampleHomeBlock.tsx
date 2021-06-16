import MessageList from "./MessageList";
import style from './HomeBlock.module.scss'

export default function HomeBlock() {
    const messages=[{name:'user', id:1, msg:'message1'}, {name:'Jane',msg:'msg 2'}]
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