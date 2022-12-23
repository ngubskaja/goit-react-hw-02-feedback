import React from "react";
import {PropTypes} from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    <ul>
        {options.map(el => 
            <li key={el}>
                <button onClick= {() => 
                    onLeaveFeedback (el)} action={el}>{el[0].toUpperCase() +el.slice(1)}
                    </button>
            </li>)}
    </ul>
}
export default FeedbackOptions;
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}