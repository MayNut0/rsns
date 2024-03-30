import React from "react";
import { useNavigate } from "react-router-dom";

import charData from '../assets/charData.json';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <div className="charaterList">
                { charData.map((a, i) => {
                    const charName = charData[i].name;
                    return ( <button type='button' onClick={() => { navigate(`/charater/${charName.en}`) }}>{charName.ko}</button> )
                }) }
            </div>
        </div>
    )
}

export default HomePage;