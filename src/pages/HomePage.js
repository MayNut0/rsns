import React from "react";
import { useNavigate } from "react-router-dom";

import charaterData from '../assets/charaterData.json';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <div className="charaterList">
                { charaterData.map((a, i) => {
                    const charName = charaterData[i].name;
                    return ( <button type='button' onClick={() => { navigate(`/${charName.en}`) }}>{charName.ko}</button> )
                }) }
            </div>
        </div>
    )
}

export default HomePage;