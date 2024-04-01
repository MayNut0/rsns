import React from "react";
import { useNavigate } from "react-router-dom";

import affixData from '../assets/skillAffix.json';
import './AffexPage.css';

const searchAffix = (data) => {
  if(data.name === "인뢰") return true;
}

function AffixPage() {
    const navigate = useNavigate();
    //console.log(affixData.findIndex(element => element.name == "자화"));

    return (
        <div className="SkillAffix">
            <div className="section-affix-list">
            {affixData.map((a, i) => {
              if (i != 0)
              return (
                <div className="box-affix-data">
                  <img src={process.env.PUBLIC_URL + '/img/icon/affix/affix_' + i + '.png'} alt={`1`}></img>
                  <div className="box-affix-detail">
                    <div className="text-affix-name">{affixData[i].name}</div>
                    <div className="text-affix-detail">{affixData[i].detail}</div>
                    <div className="text-affix-damage">{affixData[i].damage}</div>
                  </div>
                </div>
              )
            })}
            </div>
        </div>
    )
}

export default AffixPage;