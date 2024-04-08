import React, { useState } from "react";

import './CharResoUp.css';

const resoIcon = (data, num) => {
	if (num == 2 ) return ("/img/icon/reso/reso_03");
	else return ('/img/icon/reso/' + data.name.en + '_0' + (num+1));
}

function CharResoUp({ charData }) {
	const charName = charData.name.en;
	let [resoUpKey, setResoUpKey] = useState(0);

	return (
		<>
		<div className="content-box charater-resoUpgrade pc">
			<div className="title-reso-upgrade"><span>공명 효과</span></div>
			<div className="resoup-icon-area">
				<div className="resoup-icon-table">
					<div className="resoup-icon" onClick={() => { setResoUpKey(resoUpKey = 1)}}>
						<img src={process.env.PUBLIC_URL + resoIcon(charData, 1) + '.png'} alt={`resoUpgrade2`}></img>
					</div>
					<div className="resoup-icon" onClick={() => { setResoUpKey(resoUpKey = 0)}}>
						<img src={process.env.PUBLIC_URL + resoIcon(charData, 0) + '.png'} alt={`resoUpgrade1`}></img>
					</div>
				</div>
				<div className="resoup-icon-table middle">
					<div className="resoup-icon" onClick={() => { setResoUpKey(resoUpKey = 4)}}>
						<img src={process.env.PUBLIC_URL + resoIcon(charData, 4) + '.png'} alt={`resoUpgrade5`}></img>
					</div>
				</div>
				<div className="resoup-icon-table">
					<div className="resoup-icon" onClick={() => { setResoUpKey(resoUpKey = 2)}}>
						<img src={process.env.PUBLIC_URL + resoIcon(charData, 2) + '.png'} alt={`resoUpgrade3`}></img>
					</div>
					<div className="resoup-icon" onClick={() => { setResoUpKey(resoUpKey = 3)}}>
						<img src={process.env.PUBLIC_URL + resoIcon(charData, 3) + '.png'} alt={`resoUpgrade4`}></img>
					</div>
				</div>
			</div>
			<div className="resoup-detail-area">
				<img src={process.env.PUBLIC_URL + resoIcon(charData, resoUpKey) + '.png'} alt={`resoUpgrade${resoUpKey + 1}`}></img>
				<div className="resoup-detail">
					<div className="resoup__name text-bold">{charData.resoUpgrade[resoUpKey].name}</div>
					<div className="resoup__no">{resoUpKey + 1}공명</div>
					<div className="resoup__info json-data">{charData.resoUpgrade[resoUpKey].info}</div>
					<div className="resoup__life-upgrade">{charData.resoUpgrade[resoUpKey].lifeUpgrade}</div>
				</div>
			</div>
		</div>
		<div className="content-box charater-resoUpgrade mobile">
			<div className="title-reso-upgrade"><span>공명 효과</span></div>
			{charData.resoUpgrade.map((a, i) => {
				return (
					<div className="resoup-detail-area">
						<img src={process.env.PUBLIC_URL + resoIcon(charData, i) + '.png'} alt={`resoUpgrade${i + 1}`}></img>
						<div className="resoup-detail">
							<div className="resoup__name text-bold">{charData.resoUpgrade[i].name}</div>
							<div className="resoup__no">{i + 1}공명</div>
							<div className="resoup__info json-data">{charData.resoUpgrade[i].info}</div>
							<div className="resoup__life-upgrade">{charData.resoUpgrade[i].lifeUpgrade}</div>
						</div>
					</div>
				)
			})}
		</div>
		</>
	);
}

export default CharResoUp;