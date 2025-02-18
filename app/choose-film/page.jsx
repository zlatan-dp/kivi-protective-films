import styles from "./page.module.css";

import QuizWrap from "../components/QuizWrap/QuizWrap"
import CloseBtn from "../components/closeBtn/closeBtn"
import OrderInfo from "./OrderInfo/OrderInfo";



export default function ChooseFilm() {
    return (        
            <QuizWrap>
                <CloseBtn />
                <h2 className={styles.title}>Welche Folie<br/>benötigen Sie?</h2>
                <div className={styles.chooseWrap}>
                    <p className={styles.chooseText}>Diagonale</p>
                    <p className={styles.chooseText}>Anzahl</p>
                </div>
                <OrderInfo />                
            </QuizWrap>
        
    )
}