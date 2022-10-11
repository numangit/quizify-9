import React from 'react';
import './Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = (props) => {
    const { question, id, correctAnswer, options } = props.props;
    const notify = () => toast.info("Answer : " + correctAnswer, { position: "top-center", theme: "dark" });

    // answer notification toast function
    const notifyResult = (answer) => {
        if (answer === correctAnswer) {
            return toast.success('Good job, thats a correct answer!',
                { position: "top-center", theme: "dark" })
        } else {
            return toast.error(`Oops! wrong answer. Correct answer is ${correctAnswer} `,
                { position: "top-center", theme: "dark" })
        }
    };

    return (
        <div className='py-2 py-md-3 my-3 my-md-3 col-10 col-md-8 col-lg-7 mx-auto'>

            <div className="d-flex justify-space-between mx-auto bg-quiz p-2 rounded col-12">
                <p className="py-0 my-0 fs-5 fw-semibold m-1">{question}</p>
                <p onClick={notify} className="py-0 my-0 ms-auto text-end eye-icon"><small><FontAwesomeIcon icon={faEye} /></small></p>
                <ToastContainer />
            </div>
            <div>
                <label className="w-100 mt-2 p-2 form-check-label bg-dark text-start btn-answer rounded" for={`flexRadioDefault${id}1`}>
                    <input onClick={() => notifyResult(options[0])} className="form-check-input me-2" type="radio" name="flexRadioDefault" id={`flexRadioDefault${id}1`} />
                    {options[0]}
                </label>

                <label className="w-100 mt-2 p-2 form-check-label bg-dark text-start btn-answer rounded" for={`flexRadioDefault${id}2`}>
                    <input onClick={() => notifyResult(options[1])} className="form-check-input me-2" type="radio" name="flexRadioDefault" id={`flexRadioDefault${id}2`} />
                    {options[1]}
                </label>

                <label className="w-100 mt-2 p-2 form-check-label bg-dark text-start btn-answer rounded" for={`flexRadioDefault${id}3`}>
                    <input onClick={() => notifyResult(options[2])} className="form-check-input me-2" type="radio" name="flexRadioDefault" id={`flexRadioDefault${id}3`} />
                    {options[2]}
                </label>

                <label className="w-100 mt-2 p-2 form-check-label bg-dark text-start btn-answer rounded" for={`flexRadioDefault${id}4`}>
                    <input onClick={() => notifyResult(options[3])} className="form-check-input me-2" type="radio" name="flexRadioDefault" id={`flexRadioDefault${id}4`} />
                    {options[3]}
                </label>
            </div>
        </div>
    );
};

export default Quiz;