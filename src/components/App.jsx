import { useState} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const feedback = event => {
        switch (event) {
            case 'good': setGood(s => s + 1);
                break;
            case 'neutral': setNeutral(s => s + 1);
                break;
            case 'bad': setBad(s => s + 1);
                break;
            default:
                return;
        }
    };
       
    const countTotal = () => {
        return good + neutral + bad;
    };

    const countPositive = () => {
        return Math.round((good * 100) / countTotal());
    };
    
     return (
            <div>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={{good, neutral, bad}}
                        onClick={feedback} />
                </Section>

                {countTotal() > 0 ? (
                    <div>
                        <Section title={'Reviews statistics'}>
                            <Statistics
                                reviewsGood={good}
                                reviewsNeutral={neutral}
                                reviewsBad={bad}
                                totalReviews={countTotal()}
                                positiveReviews={countPositive()}
                            />
                        </Section>
                    </div>
                ) : (
                        <div>
                            <Section title={'Reviews Statistics'}>
                                <Notification message="No feedback given yet" />
                            </Section>
                        </div>
                )}
            </div>
        );
    }

        
