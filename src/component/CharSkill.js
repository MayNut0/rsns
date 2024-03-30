import React, { useState } from 'react';

const CharSkill = ({ charData }) => {
	const skill = charData.skill;
	const nameEn = charData.name.en;
	
	let [skillKey, skillKeyClick] = useState(0);
	
	return (
		<>
		<div className="content-title"><span>캐릭터 스킬</span></div>
		<div className="content-box charater-skill display-flex">
			<div className="skill-icon-area">
				{skill.map((a, i) => {
					return (
						<div className={(skill[i].derive == 1) ? `skill-icon ${i + 1} derive` : `skill-icon ${i + 1} non-derive`} onClick={() => { skillKeyClick(skillKey = i)}}>
							<img src={process.env.PUBLIC_URL + '/img/charater/' + nameEn + '/' + skill[i].icon + '.png'} alt={`skill${i + 1}`}></img>
						</div>
					)
				})}
			</div>
			<div className="skill-detail-area">
				<div className={(skill[skillKey].derive == 1) ? `skill-detail ${skillKey + 1} derive` : `skill-detail ${skillKey + 1} non-derive`}>
					<div className="skill-detail-icon">
						<img src={process.env.PUBLIC_URL + '/img/charater/' + nameEn + '/' + skill[skillKey].icon + '.png'} alt={`skill${skillKey + 1}`}></img>
					</div>
					<div className="skill-detail-wrap">
						<div className="display-flex">
							<div className="skill__derive">파생 카드</div>
							<div className="skill__name text-bold">{skill[skillKey].name}</div>
						</div>
						<div className="skill__count">수량 : {skill[skillKey].count}개</div>
						<div className="skill__cost">Cost {skill[skillKey].cost}</div>
					</div>
				</div>
				<div className="skill__info json-data">{skill[skillKey].info}<br /><br />{skill[skillKey].damage}</div>
			</div>
		</div>
		</>
	);
}

export default CharSkill;