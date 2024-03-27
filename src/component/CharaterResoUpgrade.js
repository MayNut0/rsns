import React, { useState } from "react";

/*
function CharaterResoUpgrade(parms) {
	const charName = parms.name;
	const returnIndex = parms.key;
	const charData = parms.data;
	
	let [resoKey, resoKeyClick] = useState(0);

	return (
		<div className="content-box charater-resoUpgrade">
			<div className="content-title"><span>공명 효과</span></div>
			<div className='reso-upgrade-icon'>
				{charData.resoUpgrade.map((a, i) => { return(
					<div className={`reso-upgrade__icon ${i}`} onClick={() => {resoKeyClick(i)}}>
						<img src={'/img/charater/' + charName + '/' + charData.resoUpgrade[i].icon + '.png'} alt={`resoUpgrade${i + 1}`}></img>
					</div>
				)})}
			</div>
			<div className="reso-upgrade-detail">
				<div className="reso-upgrade__name text-bold">{charData.resoUpgrade[resoKey].name}</div>
				<div className="reso-upgrade__no">{resoKey + 1}공명</div>
				<div className="reso-upgrade__info">{charData.resoUpgrade[resoKey].info}</div>
				<div className="reso-upgrade__life-upgrade">{charData.resoUpgrade[resoKey].lifeUpgrade}</div>
			</div>
		</div>
	);
}
*/

function CharaterResoUpgrade(parms) {
	const charName = parms.name;
	const returnIndex = parms.key;
	const charData = parms.data;

	return (
		<div className="content-box charater-resoUpgrade">
			<div className="content-title"><span>공명 효과</span></div>
			{charData.resoUpgrade.map((a, i) => { return(
				<div className="reso-upgrade">
					<img src={'/img/charater/' + charName + '/' + charData.resoUpgrade[i].icon + '.png'} alt={`resoUpgrade${i + 1}`}></img>
					<div className="reso-upgrade-detail">
						<div className="reso-upgrade__name text-bold">{charData.resoUpgrade[i].name}</div>
						<div className="reso-upgrade__no">{i + 1}공명</div>
						<div className="reso-upgrade__info">{charData.resoUpgrade[i].info}</div>
						<div className="reso-upgrade__life-upgrade">{charData.resoUpgrade[i].lifeUpgrade}</div>
					</div>
				</div>
			)})}
		</div>
	);
}

export default CharaterResoUpgrade;