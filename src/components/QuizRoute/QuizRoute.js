import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizRoute = () => {

    const quizs = useLoaderData();
    // console.log(quizs);
    const { question, id, correctAnswer, options } = quizs.data.questions;
    return (
        <div className="py-5 mt-5">
            <h1 className="my-0 py-0 fw-bold display-5">Quiz Of  <span className="text-green">{quizs.data.name}</span></h1>
            {
                quizs.data.questions.map(quiz => <Quiz key={quiz.id} props={quiz} ></Quiz>)
            }

        </div>
    );
};

export default QuizRoute;