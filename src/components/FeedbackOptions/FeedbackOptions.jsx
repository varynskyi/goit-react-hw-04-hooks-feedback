import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onClick }) {
    return (
        <div>
            {Object.keys(options).map(option => (
                <li className={s.list} key={option}>
                    <button className={s.btn} type="button" onClick={() => onClick(option)}>
                        {option}
                    </button>
                </li>
            ))}
        </div>
    );
}
    
FeedbackOptions.propTypes = {
    onClick: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.exact({
            option: PropTypes.string.isRequired,
        }),
    ),
};
    

