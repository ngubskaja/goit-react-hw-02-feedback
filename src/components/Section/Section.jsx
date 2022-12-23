import React from "react";
import PropTypes from 'prop-types';
import css from '../Section/Section.module.css'

export const Section = ({ title }) => {
    return (
        <h2 className={css.title}>{title}</h2>
    )
}


Section.propTypes = {
    title: PropTypes.string.isRequired
}