import React, { useState } from "react";
import { useParams } from "react-router-dom";

import './CharaterPage.css';
import charaterData from '../assets/charaterData.json';
import CharaterResoUpgrade from "../component/CharaterResoUpgrade";
import CharaterLifeSkill from "../component/CharaterLifeSkill";
import CharaterAwakeUpgrade from '../component/CharaterAwakeUpgrade';

const skillColor = (color) => {
	if (color == "red") {
		return "#AE4F4D";
	} else if (color == "blue") {
		return "#5A8AD2";
	} else if (color == "green") {
		return "#78BA4E";
	} else if (color == "yellow") {
		return "#FFD453";
	} else if (color == "purple") {
		return "#5D54D3";
	}
}

const positionIcon = (position) => {
	if (position == "전위") {
		return "◇◇◆";
	} else if (position == "중위") {
		return "◇◆◇";
	} else if (position == "후위") {
		return "◆◇◇";
	} 
}

function CharaterPage() {
	const { charName } = useParams();

	const returnIndex = charaterData.findIndex((item) => { return item.name.en === charName })
	const charData = charaterData[returnIndex];

	let [skinSelect, changeSkin] = useState(0);

	let [skillKey, skillKeyClick] = useState(0);
	let [skillNo, skillNoCheck] = useState(0);

	return (
		<div className="CharaterPage">
			<div className="charater-profile">
				<div className="area-left">
					<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.skins[0].file + '.png'} alt={`skin0`}></img>
				</div>
				<div className="area-right display-flex">
					<div className="profile-area space-between">
						<div className="charater-name display-flex">
							<div className="charater-rare">
								<img src={process.env.PUBLIC_URL + '/img/rare/' + charData.rare + '.png'} alt={`skin${skinSelect + 1}`}></img>	
							</div>
							<div className="name ko">{charData.name.ko}</div>
							<div className="display-flex">
								<div className="name en">{charData.name.en}</div>
								<div className="name zh">{charData.name.zh}</div>
							</div>
						</div>
						<div className="charater-team-logo">
							<img src={process.env.PUBLIC_URL + '/img/logo/' + charData.teamLogo + '.png'} alt={`skin${skinSelect + 1}`}></img>
						</div>
					</div>
					<div className="profile-area charater-info-top space-between">
						<div className="charater-position">{charData.position} {positionIcon(charData.position)}</div>
						<div className="charater-skill-color display-flex">
							{charData.skill.map((a, i) => { 
								const style = { backgroundColor: skillColor(charData.skill[i].color) }
								if(charData.skill[i].derive == 0) 
									return (<div style={style} className={"skill-color-box"}> </div>) 
							})}
						</div>
					</div>
					<div className="charater-tag display-flex">
						{charData.tag.map((a, i) => { return (<div className={"tag " + (i + 1)}>{charData.tag[i]}</div>) })}
					</div>
					<div className="charater-info content-box">
						<div className="charater-info-area">
							<div className="info-area-item charater-height">
								<div className="info-name"><span>신장</span></div>
								<div className="info-detail">{charData.height}</div>
							</div>
							<div className="info-area-item charater-birth">
								<div className="info-name"><span>생일</span></div>
								<div className="info-detail">{charData.birth}</div>
							</div>
							<div className="info-area-item charater-from">
								<div className="info-name"><span>출신</span></div>
								<div className="info-detail">{charData.from}</div>
							</div>
							<div className="info-area-item charater-from">
								<div className="info-name"><span>소속</span></div>
								<div className="info-detail">{charData.team}</div>
							</div>
							<div className="info-area-item charater-cv jp">
								<div className="info-name"><span>CV(日)</span></div>
								<div className="info-detail"><a href={`https://www.google.com/search?q=${charData.cv.jp}`}>{charData.cv.jp}</a></div>
							</div>
							<div className="info-area-item charater-cv cn">
								<div className="info-name"><span>CV(中)</span></div>
								<div className="info-detail"><a href={`https://www.google.com/search?q=${charData.cv.cn}`}>{charData.cv.cn}</a></div>
							</div>
						</div>
						<div className="charater-story json-data">{charData.story}</div>
					</div>
				</div>
			</div>
			<div className="charater-detail">
				<div className="content-title"><span>캐릭터 스킬</span></div>
				<div className="content-box charater-skill display-flex">
					<div className="skill-icon-area">
						{charData.skill.map((a, i) => {
							return (
								<div className={(charData.skill[i].derive == 1) ? `skill-icon ${i + 1} derive` : `skill-icon ${i + 1} non-derive`} onClick={() => { skillKeyClick(skillKey = i)}}>
									<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.skill[i].icon + '.png'} alt={`skill${i + 1}`}></img>
								</div>
							)
						})}
					</div>
					<div className="skill-detail-area">
						<div className={(charData.skill[skillKey].derive == 1) ? `skill-detail ${skillKey + 1} derive` : `skill-detail ${skillKey + 1} non-derive`}>
							<div className="skill-detail-icon">
								<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.skill[skillKey].icon + '.png'} alt={`skill${skillKey + 1}`}></img>
							</div>
							<div className="skill-detail-wrap">
								<div className="display-flex">
									<div className="skill__derive">파생 카드</div>
									<div className="skill__name text-bold">{charData.skill[skillKey].name}</div>
								</div>
								<div className="skill__count">수량 : {charData.skill[skillKey].count}개</div>
								<div className="skill__cost">Cost {charData.skill[skillKey].cost}</div>
							</div>
						</div>
						<div className="skill__info json-data">{charData.skill[skillKey].info}<br /><br />{charData.skill[skillKey].damage}</div>
					</div>
				</div>
				<CharaterResoUpgrade data={charData} key={returnIndex} name={charName} />
				<CharaterAwakeUpgrade data={charData} key={returnIndex} name={charName} />
				<CharaterLifeSkill data={charData} key={returnIndex} name={charName} />
				<div className="charater-skin">
				{<div className={`skin-wrap skin${skinSelect + 1}`}>
					<div className="skin-img">
						<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.skins[skinSelect].file + '.png'} alt={`skin${skinSelect + 1}`}></img>
					</div>
					<div className="skin-info-wrap">
						<div className="skin-button-wrap">
							{charData.skins.map((a, i) => { 
							return (<button type="button" className="skin-button" onClick={() => {changeSkin(skinSelect = i)}} >{charData.skins[i].name}</button>) })}
						</div>
						<div className={`skin-name skin${skinSelect + 1}`}>{charData.skins[skinSelect].name}</div>
						<div className={`skin-get skin${skinSelect + 1}`}>{charData.skins[skinSelect].get}</div>
						<div className={`skin-info skin${skinSelect + 1} json-data`}>{charData.skins[skinSelect].info}</div>
					</div>
				</div>}
			</div>
			</div>
		</div>
	)
}

export default CharaterPage;