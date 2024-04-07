import React, { useState } from 'react';

import AffixData from '../assets/skillAffix.json';

const CharSkill = ({ charData }) => {
	const skill = charData.skill;
	const nameEn = charData.name.en;
	
	let [skillKey, skillKeyClick] = useState(0);
	
	return (
		<div className='section-skill'>
			<div className="title-charater-skill"><span>캐릭터 스킬</span></div>
			<div className="box-charater-skill pc">
				<div className="box-skill-icon">
					{skill.map((a, i) => {
						return (
							<div className={(skill[i].derive == 1) ? `icon-skill ${i + 1} derive` : `icon-skill ${i + 1} non-derive`} onClick={() => { skillKeyClick(skillKey = i)}}>
								<img src={process.env.PUBLIC_URL + '/img/icon/skill/' + nameEn + '_0' + (i + 1) + '.png'} alt={`skill${i + 1}`}></img>
							</div>
						)
					})}
				</div>
				<div className="box-skill-detail">
					<div className={(skill[skillKey].derive == 1) ? `box-skill-detail__derive skill-${skillKey + 1}` : `box-skill-detail__non-derive skill-${skillKey + 1}`}>
						<div className="icon-skill-detail">
							<img src={process.env.PUBLIC_URL + '/img/icon/skill/' + nameEn + '_0' + (skillKey + 1) + '.png'} alt={`skill${skillKey + 1}`}></img>
						</div>
						<div className="box-skill-detail__text">
							<div className="box-skill-title">
								<div className="text-skill-derive">파생 카드</div>
								<div className="text-skill-name">{skill[skillKey].name}</div>
							</div>
							<div className="text-skill-count">수량 : {skill[skillKey].count}개</div>
							<div className="text-skill-cost">Cost {skill[skillKey].cost}</div>
						</div>
					</div>
					<div className="box-skill-info json-data">{skill[skillKey].info}<br /><br />{skill[skillKey].damage}</div>
				</div>
				<div className='box-skill-options'>
					{skill[skillKey].affix.map((a, i) => {
						function isAffix(element)  { if(element.name === skill[skillKey].affix[i]) { return true; } }
						const outAffix = AffixData.find(isAffix);
						return (
							<div className='box-skill-affix'>
								<div className='box-skill-affix__top'>
									<div className='skill-affix__icon' style={{backgroundImage:'url('+process.env.PUBLIC_URL+'/img/icon/affix/affix_'+outAffix.id+'.png)'}}></div>
									<div className='skill-affix__name'>{outAffix.name}</div>
								</div>
								<div className='skill-affix__detail'>{outAffix.detail}</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className="box-charater-skill mobile">
					{skill.map((a, i) => {
						return (
							<div className={(skill[i].derive == 1) ? `box-skill-detail__derive skill-${i + 1}` : `box-skill-detail__non-derive skill-${i + 1}`}>
								<div className="icon-skill-detail">
									<img src={process.env.PUBLIC_URL + '/img/icon/skill/' + nameEn + '_0' + (i + 1) + '.png'} alt={`skill${i + 1}`}></img>
								</div>
								<div className="box-skill-detail__text">
									<div className="box-skill-title">
										<div className="text-skill-derive">파생 카드</div>
										<div className="text-skill-name">{skill[i].name}</div>
									</div>
									<div className='box-skill-count'>
										<div className="text-skill-count">수량 : {skill[i].count}개</div>
										<div className="text-skill-cost">Cost {skill[i].cost}</div>
									</div>
									<div className="box-skill-info json-data">{skill[i].info}<br /><br />{skill[i].damage}</div>
								</div>
							</div>
						)
					})}
			</div>
		</div>
	);
}

export default CharSkill;