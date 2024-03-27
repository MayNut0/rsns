import React from "react";
import { useParams } from "react-router-dom";

import './CharaterPage.css';
import charaterData from '../assets/charaterData.json';
import CharaterResoUpgrade from "../component/CharaterResoUpgrade";
import CharaterLifeSkill from "../component/CharaterLifeSkill";
import CharaterAwakeUpgrade from '../component/CharaterAwakeUpgrade';

function CharaterPage() {
	const { charName } = useParams();

	const returnIndex = charaterData.findIndex((item) => { return item.name.en === charName })
	const charData = charaterData[returnIndex];

	return (
		<div className="CharaterPage">
			<div className="charater-skins">
				{charData.skins.map((a, i) => { return (<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.skins[i].file + '.png'} alt={`skin${i + 1}`}></img>) })}
			</div>
			<div className="charater-profile">
				<div className="charater-name">
					<div className="name ko text-bold">{charData.name.ko}</div>
					<div className="name zh">{charData.name.zh}</div>
					<div className="name en">{charData.name.en}</div>
				</div>
				<div className="charater-rare">{charData.rare}</div>
				<div className="charater-position">포지션 : {charData.position}</div>
				<div className="charater-tag">태그 :
					{charData.tag.map((a, i) => { return (<div className={"tag " + (i + 1)}>{charData.tag[i]}</div>) })}
				</div>
				<div className="charater-info content-box">
					<div className="content-title"><span>캐릭터 정보</span></div>
					<div className="charater-height">신장 : {charData.height}</div>
					<div className="charater-birth">생일 : {charData.birth}</div>
					<div className="charater-from">출신 : {charData.from}</div>
					<div className="charater-cv">
						<div className="cv jp">일본어 CV : {charData.cv.jp}</div>
						<div className="cv cn">중국어 CV : {charData.cv.cn}</div>
					</div>
					<div className="charater-story">{charData.story}</div>
				</div>
			</div>
			<div className="charater-detail">
				<div className="content-box charater-skill">
					<div className="content-title"><span>캐릭터 스킬</span></div>
					{charData.skill.map((a, i) => {
						let classOption = `skill-info ${i + 1} non-derive`;
						if (charData.skill[i].derive == 1) { classOption = `skill-info ${i + 1} derive`; }

						return (
							<div className={classOption}>
								<img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.skill[i].icon + '.png'} alt={`skill${i + 1}`}></img>
								<div className="skill-detail">
									<div className="skill__derive">파생 카드</div>
									<div className="skill__name text-bold">{charData.skill[i].name}</div>
									<div className="skill__count">수량 : {charData.skill[i].count}개</div>
									<div className="skill__cost">Cost : {charData.skill[i].cost}</div>
									<div className="skill__info">{charData.skill[i].info}<br />{charData.skill[i].damage}</div>
								</div>
							</div>
						)
					})}
				</div>
				<CharaterResoUpgrade data={charData} key={returnIndex} name={charName} />
				<CharaterAwakeUpgrade data={charData} key={returnIndex} name={charName} />
				<CharaterLifeSkill data={charData} key={returnIndex} name={charName} />
			</div>
		</div>
	)
}

export default CharaterPage;