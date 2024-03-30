import React from "react";

function CharLifeSkill({ charData }) {
	const charName = charData.name.en;

	return (
		<div className="content-box charater-lifeSkill">
            <div className="content-title"><span>생활 기술</span></div>
            {charData.lifeSkill.map((a, i) => { return(
                <div className="life-skill">
                    <div className="life-skill-detail">
                        <div className="life-skill__name text-bold">{charData.lifeSkill[i].name}</div>
                        <div className="life-skill__info">{charData.lifeSkill[i].info}</div>
                    </div>
                </div>
            )})}
        </div>
	);
}

export default CharLifeSkill;