import React from "react";

function CharLifeSkill({ charData }) {
	const charName = charData.name.en;

	return (
		<div className="section-life-skill">
			<div className="title-life-skill"><span>생활 기술</span></div>
			<div className="list-life-skill">
				{charData.lifeSkill.map((a, i) => {
					return (
						<div className="box-life-skill-detail">
							<div className="life-skill__name">{charData.lifeSkill[i].name}</div>
							<div className="life-skill__info">{charData.lifeSkill[i].info}</div>
						</div>
					)
				})}
			</div>
		</div>
	);
}

export default CharLifeSkill;