import React from 'react';

const SecondaryContainer = ({ children, className = '', id }) => {
    return (
        <section id={id} className={`secondary-container ${className}`.trim()}>
            {children}
        </section>
    );
};

export default SecondaryContainer;
