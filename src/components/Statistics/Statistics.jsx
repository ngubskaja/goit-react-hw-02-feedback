import React from "react";
import { PropTypes } from 'prop-types';

const Statistics = ({ good, neutral, bad, total, goodPersentage, }) => {
    return(
        <div>
        <h2> Statistics</h2>
        <ul>
          <li>Good{good}</li>
          <li>Neutral{neutral}</li>
          <li>Bad{bad}</li>
          <li>Total{total}</li>
          <li>Positive feedback{goodPersentage}%</li>
        </ul>
      </div>
    )
   
}
export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    goodPercentage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};