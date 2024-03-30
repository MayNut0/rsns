import React from 'react';

const positionIcon = (position) => {
	if (position == "전위") {
		return "◇◇◆";
	} else if (position == "중위") {
		return "◇◆◇";
	} else if (position == "후위") {
		return "◆◇◇";
	}
}

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

const CharProfile = ({ charData }) => {
	const nameEn = charData.name.en;
	const nameKo = charData.name.ko;
	const nameZh = charData.name.zh;

	return (
		<div className="charater-profile">
			<div className="area-left">
				<img src={process.env.PUBLIC_URL + '/img/charater/' + nameEn + '/' + charData.skins[0].file + '.png'} alt={`skin0`}></img>
			</div>
			<div className="area-right display-flex">
				<div className="profile-area space-between">
					<div className="charater-name display-flex">
						<div className="charater-rare">
							<img src={process.env.PUBLIC_URL + '/img/rare/' + charData.rare + '.png'} alt='rare'></img>
						</div>
						<div className="name ko">{nameKo}</div>
						<div className="display-flex">
							<div className="name en">{nameEn}</div>
							<div className="name zh">{nameZh}</div>
						</div>
					</div>
					<div className="charater-team-logo">
						<img src={process.env.PUBLIC_URL + '/img/logo/' + charData.teamLogo + '.png'} alt='teamlogo'></img>
					</div>
				</div>
				<div className="profile-area charater-info-top space-between">
					<div className="charater-position">{charData.position} {positionIcon(charData.position)}</div>
					<div className="charater-skill-color display-flex">
						{charData.skill.map((a, i) => {
							const style = { backgroundColor: skillColor(charData.skill[i].color) }
							if (charData.skill[i].derive == 0)
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
	);
}

export default CharProfile;