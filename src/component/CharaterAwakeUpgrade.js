import React from "react";

function CharaterAwakeUpgrade(parms) {
	const charName = parms.name;
	const returnIndex = parms.key;
	const charData = parms.data;

	return (
		<div className="content-box charater-awakeUpgrade">
            <div className="content-title"><span>각성 효과</span></div>
            {charData.awakeUpgrade.map((a, i) => { return(
                <div className="awake-upgrade">
                    <img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.awakeUpgrade[i].icon + '.png'} alt={`awakeUpgrade${i + 1}`}></img>
                    <div className="awake-upgrade-detail">
                        <div className="awake-upgrade__name text-bold">{charData.awakeUpgrade[i].name}</div>
                        <div className="awake-upgrade__no">{i + 1}돌파</div>
                        <div className="awake-upgrade__info">{charData.awakeUpgrade[i].info}</div>
                    </div>
                </div>
            )})}
        </div>
	);
}

export default CharaterAwakeUpgrade;