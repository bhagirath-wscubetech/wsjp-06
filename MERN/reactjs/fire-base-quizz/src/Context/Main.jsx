import React, { createContext, useEffect, useState } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQjNzqt7zAh6Dqrv1MTzMgkbNLGs5LVcg",
    authDomain: "wsjp-02.firebaseapp.com",
    databaseURL: "https://wsjp-02-default-rtdb.firebaseio.com",
    projectId: "wsjp-02",
    storageBucket: "wsjp-02.appspot.com",
    messagingSenderId: "581214095936",
    appId: "1:581214095936:web:dc67bcd080778329afeda5",
    measurementId: "G-HHVV4G61N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const MainContext = createContext();
const Main = (props) => {
    const [quizz, setQuizz] = useState([]);
    const [answers, setAnswer] = useState([]);
    const [current, setCurrent] = useState(0);
    const [result, setResult] = useState(0);
    const [finish, setFinish] = useState(false);


    useEffect(
        () => {
            const starCountRef = ref(db, 'quizz');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                const dataArr = Object.keys(data).map(
                    (k) => {
                        return {
                            ...data[k],
                            id: k
                        }
                    }
                )
                setQuizz(dataArr);
            });
        },
        []
    )

    function chooseAns(id, ans, correct) {
        const score = ans == correct ? 1 : 0;
        let flag = true; // will create a new entry
        const newAns = answers.map(
            (data) => {
                if (data.id == id) {
                    flag = false; // need not create a new entry
                    return {
                        id,
                        ans,
                        score
                    }
                } else {
                    return data
                }
            }
        )
        if (flag == true) {
            setAnswer(
                [
                    ...answers,
                    {
                        id,
                        ans,
                        score
                    }
                ]
            )
        } else {
            setAnswer(newAns);
        }
    }


    function finishGame() {
        let score = 0;
        answers.forEach(
            (ans) => {
                score += ans.score
            }
        )
        setResult(score);
        setFinish(true);
    }

    return (
        <MainContext.Provider value={{ result, finish, finishGame, quizz, setCurrent, answers, current, chooseAns }}>
            {props.children}
        </MainContext.Provider>
    );
}

export default Main;

export { MainContext }
