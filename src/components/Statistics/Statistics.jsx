import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ reviewsGood, reviewsNeutral, reviewsBad, totalReviews, positiveReviews }) => (
    <div className={s.container}>
        <p className={s.item}>Good: {reviewsGood}</p>
        <p className={s.item}>Neutral: {reviewsNeutral}</p>
        <p className={s.item}>Bad: {reviewsBad}</p>
        <p className={s.item}>Total reviews: {totalReviews}</p>
        <p className={s.item}>Positive feedback(%): {positiveReviews}</p>
    </div>
);

Statistics.propTypes = {
    reviewsGood: PropTypes.number.isRequired,
    reviewsNeutral: PropTypes.number.isRequired,
    reviewsBad: PropTypes.number.isRequired,
    totalReviews: PropTypes.number.isRequired,
    positiveReviews: PropTypes.number.isRequired,
};

export default Statistics;