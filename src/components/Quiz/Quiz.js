import React from 'react';
import './Quiz.css';

const Quiz = (props) => {
    console.log(props.props);
    const { question, id, correctAnswer, options } = props.props;


    return (
        <div className='py-5 my-5'>
            <div className="container-fluid">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>{question}</h3>
                        </div>
                        <div className="modal-body">
                            <div className="col-xs-3 5"> </div>
                            <div className="quiz" id="quiz" data-toggle="buttons">
                                <label className="element-animation1 btn btn-lg btn-danger btn-block"><span className="btn-label"><i className="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="1" />{options[0]}</label>
                                <label className="element-animation2 btn btn-lg btn-danger btn-block"><span className="btn-label"><i className="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="2" /> {options[1]}</label>
                                <label className="element-animation3 btn btn-lg btn-danger btn-block"><span className="btn-label"><i className="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="3" /> {options[2]}</label>
                                <label className="element-animation4 btn btn-lg btn-danger btn-block"><span className="btn-label"><i className="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="4" /> {options[3]} </label> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;