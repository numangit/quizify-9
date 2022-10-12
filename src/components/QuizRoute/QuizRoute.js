import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import { toast } from 'react-toastify';

const QuizRoute = () => {
    const quizs = useLoaderData();
    const [correctAnswersSelected, setCorrectAnswersSelected] = useState(0);
    const [wrongAnswersSelected, setWrongAnswersSelected] = useState(0);

    // answer notification toast and update function
    const notifyResult = (answer, correctAns) => {
        if (answer === correctAns) {
            const newCorrectValue = correctAnswersSelected + 1;
            setCorrectAnswersSelected(newCorrectValue);
            return toast.success('Good job, thats a correct answer!',
                { position: "top-center", theme: "dark" })
        } else {
            const newWrongValue = wrongAnswersSelected + 1;
            setWrongAnswersSelected(newWrongValue);
            return toast.error(`Oops! wrong answer. Correct answer is ${correctAns} `,
                { position: "top-center", theme: "dark" })
        }
    };

    return (
        <div className="py-5 mt-5">
            <h1 className="my-0 py-0 fw-bold display-5">Quiz Of  <span className="text-green">{quizs.data.name}</span></h1>
            <p className='p-2 col-md-8 mx-auto fs-5'> Yay! its quiz time, make sure to answer all the questions correct. Goodluck!</p>
            <div className="">
                <div className="d-flex justify-content-evenly rounded-4 my-2 p-3 col-10 col-md-8 col-lg-7 mx-auto">
                    <div className="bg-dark p-1 p-lg-3 col-5 col-md-5 rounded ">
                        <p className="m-0 p-0 fs-1 fw-bold text-success" >{correctAnswersSelected}</p>
                        <p className=" m-0 p-0"><small>Correct Answers</small></p>
                    </div>
                    <div className="bg-dark p-1 p-md-3 col-5 col-md-5 rounded ">
                        <p className="m-0 p-0 fs-1 fw-bold text-danger" >{wrongAnswersSelected}</p>
                        <p className=" m-0 p-0"><small>Wrong Answers</small></p>
                    </div>
                </div>
                {
                    quizs.data.questions.map(quiz => <Quiz key={quiz.id} props={quiz} notifyResult={notifyResult} ></Quiz>)
                }
            </div>
        </div >
    );
};

export default QuizRoute;