import React, { useState } from "react";

import './CharAwakeUp.css';

const awakeIcon = (data, num) => {
	if (num == 2 || num == 3) {
		if (data.awakeUpgrade[num].info == "공격력 +100") return ("/img/icon/awake/awakeATK");
		else return ("/img/icon/awake/awakeDEF");
	}
	else return ('/img/icon/awake/' + data.name.en + '_0' + (num+1));
}

function CharAwakeUp({ charData }) {
	const charName = charData.name.en;
	let [awakeUpKey, setAwakeUpKey] = useState(0);

	return (
		<>
		<div className="section-awake-upgrade pc">
			<div className="title-awake-upgrade"><span>각성 효과</span></div>
			<div className="section-awake-upgrade-icons">
				{charData.awakeUpgrade.map((a, i) => {
					return (
						<div className="button-awake-upgrade" onClick={() => { setAwakeUpKey(awakeUpKey = i)}}>
							<img src={process.env.PUBLIC_URL + awakeIcon(charData, i) + '.png'} alt={`awakeUpgrade${i + 1}`}></img>
						</div>
					)
				})}
			</div>
			<div className="section-awake-upgrade-detail">
				<img src={process.env.PUBLIC_URL + awakeIcon(charData, awakeUpKey) + '.png'} alt={`awakeUpgrade${awakeUpKey + 1}`}></img>
				<div className="box-awake-upgrade-detail">
					<div className="awake-upgrade__name">{charData.awakeUpgrade[awakeUpKey].name}</div>
					<div className="awake-upgrade__num">{awakeUpKey + 1}각성</div>
					<div className="awake-upgrade__info json-data">{charData.awakeUpgrade[awakeUpKey].info}</div>
				</div>
			</div>
		</div>
		<div className="section-awake-upgrade mobile">
			<div className="title-awake-upgrade"><span>각성 효과</span></div>
			<div className="section-awake-upgrade-icons">
				{charData.awakeUpgrade.map((a, i) => {
					return (
						<div className="section-awake-upgrade-detail">
							<img src={process.env.PUBLIC_URL + awakeIcon(charData, i) + '.png'} alt={`awakeUpgrade${i + 1}`}></img>
							<div className="box-awake-upgrade-detail">
								<div className="awake-upgrade__name">{charData.awakeUpgrade[i].name}</div>
								<div className="awake-upgrade__num">{i + 1}각성</div>
								<div className="awake-upgrade__info json-data">{charData.awakeUpgrade[i].info}</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
		</>
	);
}

export default CharAwakeUp;