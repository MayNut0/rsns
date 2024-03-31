import React, { useState } from "react";

import './CharAwakeUp.css';

function CharAwakeUp({ charData }) {
	const charName = charData.name.en;
	let [awakeUpKey, setAwakeUpKey] = useState(0);

	return (
		<div className="section-awake-upgrade">
			<div className="title-awake-upgrade"><span>각성 효과</span></div>
			<div className="section-awake-upgrade-icons">
				{charData.awakeUpgrade.map((a, i) => {
					return (
						<div className="button-awake-upgrade" onClick={() => { setAwakeUpKey(awakeUpKey = i)}}>
							<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.awakeUpgrade[i].icon + '.png'} alt={`awakeUpgrade${i + 1}`}></img>
						</div>
					)
				})}
			</div>
			<div className="section-awake-upgrade-detail">
				<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.awakeUpgrade[awakeUpKey].icon + '.png'} alt={`awakeUpgrade${awakeUpKey + 1}`}></img>
				<div className="box-awake-upgrade-detail">
					<div className="awake-upgrade__name">{charData.awakeUpgrade[awakeUpKey].name}</div>
					<div className="awake-upgrade__num">{awakeUpKey + 1}각성</div>
					<div className="awake-upgrade__info">{charData.awakeUpgrade[awakeUpKey].info}</div>
				</div>
			</div>
		</div>
	);
}

export default CharAwakeUp;