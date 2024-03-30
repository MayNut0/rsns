import React from "react";
import { useNavigate } from "react-router-dom";

//import charaterData from '../assets/charaterData.json';
import charaterData from '../charater.json';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <div className="charaterList">
                { charaterData.map((a, i) => {
                    const charName = charaterData[i];
                    return ( <button type='button' onClick={() => { navigate(`/charater/${charName.en}`) }}>{charName.ko}</button> )
                }) }
            </div>
        </div>
    )
}

export default HomePage;