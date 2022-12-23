import React from "react";
// import { PropTypes } from 'prop-types';
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification"
import Section from "./Section/Section";


export class App extends React.Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateFeedback = (button) => {
    this.setState((prevState) => ({
      [button]: prevState[button] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  }

  render() {
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = totalFeedback === 0 ? null : this.countPositiveFeedbackPercentage(this.state);
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return(
      <>
       <div className="Section">
       <Section title={'Please leave feedback'} />
        <FeedbackOptions options={options}
          onLeaveFeedback={this.updateFeedback} />
        {totalFeedback === 0 ? <Notification message={"There is no feedback"} /> :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            goodPersentage={positiveFeedbackPercentage}
          />}
       </div>
      </>
    )
  }
}

