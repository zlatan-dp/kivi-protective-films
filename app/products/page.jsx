import QuizWrap from "../components/QuizWrap/QuizWrap"

import Link from "next/link"

export default function ChooseFilm() {
    return (        
            <QuizWrap>
                <Link href="/">back</Link>
                <h1>products</h1>
                <p>test</p>
                <Link href="/choose-film">choose-film</Link>
            </QuizWrap>
        
    )
}