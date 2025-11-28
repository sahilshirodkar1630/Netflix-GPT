import React, { useState } from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { APP_IMG_BG_URL } from '../utils/constants';

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10 ">
                <img
                src={APP_IMG_BG_URL}
                alt="logo"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    );
};

export default GptSearch;