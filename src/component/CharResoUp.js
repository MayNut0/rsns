import React, { useState } from "react";

import './CharResoUp.css';

function CharResoUp({ charData }) {
	const charName = charData.name.en;
	let [resoUpKey, setResoUpKey] = useState(0);

	return (
		<>
		<div className="content-title"><span>공명 효과</span></div>
		<div className="content-box charater-resoUpgrade">
			<div className="resoup-icon-area">
				<div className="resoup-icon-table">
					<div className="resoup-icon" onClick={() => { setResoUpKey(resoUpKey = 1)}}>
						<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.resoUpgrade[1].icon + '.png'} alt={`resoUpgrade2`}></img>
					</div>
					<div className="resoup-icon" onClick={() => { setResoUpKey(resoUpKey = 0)}}>
						<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.resoUpgrade[0].icon + '.png'} alt={`resoUpgrade1`}></img>
					</div>
				</div>
				<div className="resoup-icon-table middle">
					<div className="resoup-icon" onClick={() => { setResoUpKey(resoUpKey = 4)}}>
						<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.resoUpgrade[4].icon + '.png'} alt={`resoUpgrade5`}></img>
					</div>
				</div>
				<div className="resoup-icon-table">
					<div className="resoup-icon" onClick={() => { setResoUpKey(resoUpKey = 2)}}>
						<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.resoUpgrade[2].icon + '.png'} alt={`resoUpgrade3`}></img>
					</div>
					<div className="resoup-icon" onClick={() => { setResoUpKey(resoUpKey = 3)}}>
						<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.resoUpgrade[3].icon + '.png'} alt={`resoUpgrade4`}></img>
					</div>
				</div>
			</div>
			<div className="resoup-detail-area">
				<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.resoUpgrade[resoUpKey].icon + '.png'} alt={`resoUpgrade${resoUpKey + 1}`}></img>
				<div className="resoup-detail">
					<div className="resoup__name text-bold">{charData.resoUpgrade[resoUpKey].name}</div>
					<div className="resoup__no">{resoUpKey + 1}공명</div>
					<div className="resoup__info">{charData.resoUpgrade[resoUpKey].info}</div>
					<div className="resoup__life-upgrade">{charData.resoUpgrade[resoUpKey].lifeUpgrade}</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default CharResoUp;