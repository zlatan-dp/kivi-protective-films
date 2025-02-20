"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";
import classNames from "classnames";

import QuizWrap from "../components/QuizWrap/QuizWrap";
import CloseBtn from "../components/closeBtn/closeBtn";
import OrderInfo from "./OrderInfo/OrderInfo";
import TranspBtn from "../components/transparentBtn/transparentBtn";
import WhiteBtn from "../components/whiteBtn/whiteBtn";

export default function ChooseFilm() {
    const router = useRouter();
    
    const defaultFilms = [{ diagonal: 32, count: 1 }];

    // Спочатку `selectedFilms` порожній, щоб уникнути SSR-проблем
    const [selectedFilms, setSelectedFilms] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const savedFilms = localStorage.getItem("selectedFilms");
        if (savedFilms) {
            setSelectedFilms(JSON.parse(savedFilms));
        } else {
            localStorage.setItem("selectedFilms", JSON.stringify(defaultFilms));
            setSelectedFilms(defaultFilms);
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem("selectedFilms", JSON.stringify(selectedFilms));
        }
    }, [selectedFilms, isClient]);

    // Додає новий OrderInfo
    const addNewFilm = () => {
        const newFilms = [...selectedFilms, { diagonal: 32, count: 1 }];
        setSelectedFilms(newFilms);
    };

    // Оновлює OrderInfo
    const updateFilm = (index, newValues) => {
        setSelectedFilms((prev) =>
            prev.map((film, i) => (i === index ? { ...film, ...newValues } : film))
        );
    };

    // Видаляє OrderInfo
    const removeFilm = (index) => {
        setSelectedFilms((prev) => prev.filter((_, i) => i !== index));
    };

    const goToNextStep = () => {
        console.log("Selected films:", selectedFilms);
        router.push("/order-info");
    };

    // Не рендеримо контент, поки не ініціалізовано клієнт
    if (!isClient) return null;

    return (
        <QuizWrap>
            <CloseBtn />
            <h2 className={styles.title}>Welche Folie<br/>benötigen Sie?</h2>
            <div className={styles.chooseWrap}>
                <p className={styles.chooseText}>Diagonale</p>
                <p className={styles.chooseText}>Anzahl</p>
            </div>
            <div className={styles.orderWrap}>
                {selectedFilms.map((film, index) => (
                    <OrderInfo
                        key={index}
                        index={index}
                        diagonal={film.diagonal}
                        count={film.count}
                        onUpdate={updateFilm}
                        onRemove={selectedFilms.length > 1 ? () => removeFilm(index) : null}
                    />
                ))}
            </div>
            <p className={styles.orderText}>
                Sie haben {selectedFilms.length} Folie(n) für {selectedFilms.map(f => `${f.diagonal}” - ${f.count} Stk.`).join(", ")} ausgewählt
            </p>
            <TranspBtn marginTop="20px" onClick={addNewFilm}>TV-DIAGONALE HINZUFÜGEN</TranspBtn>
            <WhiteBtn marginTop="20px" onClick={goToNextStep}>WEITER</WhiteBtn>
            <div className={styles.progressBars}>
                <div className={classNames(styles.bar, styles.filled)}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </QuizWrap>
    );
}


// "use client"

// import {useRouter} from "next/navigation"
// import { useEffect, useState } from "react";

// import styles from "./page.module.css";

// import classNames from "classnames";

// import QuizWrap from "../components/QuizWrap/QuizWrap"
// import CloseBtn from "../components/closeBtn/closeBtn"
// import OrderInfo from "./OrderInfo/OrderInfo";
// import TranspBtn from "../components/transparentBtn/transparentBtn";
// import WhiteBtn from "../components/whiteBtn/whiteBtn";



// export default function ChooseFilm() {

//     const router = useRouter()

//     // Стан для збереження вибраних діагоналей і кількості
//     const defaultFilms = [{ diagonal: 32, count: 1 }];
    
//     const [selectedFilms, setSelectedFilms] = useState(defaultFilms);

//     useEffect(() => {
//         const savedFilms = JSON.parse(localStorage.getItem("selectedFilms"));
//         if (savedFilms) {
//             setSelectedFilms(savedFilms);
//         } else {
//             localStorage.setItem("selectedFilms", JSON.stringify(defaultFilms)); // Записуємо дефолтне значення
//         }
//     }, []);

//     // Додає новий OrderInfo з дефолтним значенням
//     const addNewFilm = () => {
//         const newFilms = [...selectedFilms, { diagonal: "", count: 1 }];
//         setSelectedFilms(newFilms);
//         localStorage.setItem("selectedFilms", JSON.stringify(newFilms));
//     };

//     // Оновлює діагональ або кількість
//     const updateFilm = (index, newValues) => {
//         setSelectedFilms((prev) =>
//             prev.map((film, i) => (i === index ? { ...film, ...newValues } : film))
//         );
//     };

//     // Видаляє OrderInfo
//     const removeFilm = (index) => {
//         setSelectedFilms((prev) => prev.filter((_, i) => i !== index));
//     };

//     const goToNextStep = () => {
//         console.log("Selected films:", selectedFilms);
//         localStorage.setItem("selectedFilms", JSON.stringify(selectedFilms));
//         router.push("/order-info")     
//     }

//     return (        
//             <QuizWrap>
//                 <CloseBtn />
//                 <h2 className={styles.title}>Welche Folie<br/>benötigen Sie?</h2>
//                 <div className={styles.chooseWrap}>
//                     <p className={styles.chooseText}>Diagonale</p>
//                     <p className={styles.chooseText}>Anzahl</p>
//                 </div>
//                 <div className={styles.orderWrap}>
//                     {selectedFilms.map((film, index) => (
//                         <OrderInfo
//                             key={index}
//                             index={index}
//                             diagonal={film.diagonal}
//                             count={film.count}
//                             onUpdate={updateFilm}
//                             onRemove={selectedFilms.length > 1 ? () => removeFilm(index) : null}
//                         />
//                     ))} 
//                 </div>
//                 <p className={styles.orderText}>Sie haben {selectedFilms.length} Folie(n) für {selectedFilms.map(f => `${f.diagonal}” - ${f.count} Stk.`).join(", ")} ausgewählt</p>
//                 <TranspBtn marginTop = "20px" onClick={addNewFilm}>TV-DIAGONALE HINZUFÜGEN</TranspBtn>
//                 <WhiteBtn marginTop = "20px" onClick={goToNextStep}>WEITER</WhiteBtn>
//                 <div className={styles.progressBars}>
//                     <div className={classNames(styles.bar, styles.filled)}></div>
//                     <div className={styles.bar}></div>
//                     <div className={styles.bar}></div>
//                     <div className={styles.bar}></div>
//                 </div>
//             </QuizWrap>
        
//     )
// }