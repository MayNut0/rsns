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
		<div className="section-profile">
			<div className="section-profile__left">
				<img src={process.env.PUBLIC_URL + '/img/skin/' + nameEn + '_0' + (0+1) + '.png'} alt={`skin0`}></img>
			</div>
			<div className="section-profile__right">
				<div className="box-basicInfo">
					<div className="box-basicInfo__left">
						<div className="icon-charater-rare">
							<img src={process.env.PUBLIC_URL + '/img/rare/' + charData.rare + '.png'} alt='rare'></img>
						</div>
						<div className="text-charater-name__ko">{nameKo}</div>
						<div className="box-charater-name-other">
							<div className="text-charater-name__en">{nameEn}</div>
							<div className="text-charater-name__zh">{nameZh}</div>
						</div>
					</div>
					<div className="logo-charater-team">
						<img src={process.env.PUBLIC_URL + '/img/logo/' + charData.teamLogo + '.png'} alt='teamlogo'></img>
					</div>
				</div>
				<div className="box-charater-case">
					<div className="box-charater-position">{charData.position} {positionIcon(charData.position)}</div>
					<div className="box-charater-skill-color display-flex">
						{charData.skill.map((a, i) => {
							const style = { backgroundColor: skillColor(charData.skill[i].color) }
							if (charData.skill[i].derive == 0)
								return (<div style={style} className={"color-charater-skill"}> </div>)
						})}
					</div>
				</div>
				<div className="box-charater-tag">
					{charData.tag.map((a, i) => { return (<div className={"tag__" + (i + 1)}>{charData.tag[i]}</div>) })}
				</div>
				<div className="box-charater-info">
					<div className="box-charater-info__box charater-height">
						<div className="text-info__name"><span>신장</span></div>
						<div className="text-info__detail">{charData.height}</div>
					</div>
					<div className="box-charater-info__box charater-birth">
						<div className="text-info__name"><span>생일</span></div>
						<div className="text-info__detail">{charData.birth}</div>
					</div>
					<div className="box-charater-info__box charater-from">
						<div className="text-info__name"><span>출신</span></div>
						<div className="text-info__detail">{charData.from}</div>
					</div>
					<div className="box-charater-info__box charater-from">
						<div className="text-info__name"><span>소속</span></div>
						<div className="text-info__detail">{charData.team}</div>
					</div>
					<div className="box-charater-info__box charater-cv jp">
						<div className="text-info__name"><span>CV(日)</span></div>
						<div className="text-info__detail"><a href={`https://www.google.com/search?q=${charData.cv.jp}`} target='_blank'>{charData.cv.jp}</a></div>
					</div>
					<div className="box-charater-info__box charater-cv cn">
						<div className="text-info__name"><span>CV(中)</span></div>
						<div className="text-info__detail"><a href={`https://www.google.com/search?q=${charData.cv.cn}`} target='_blank'>{charData.cv.cn}</a></div>
					</div>
					</div>
				<div className="box-charater-story json-data">{charData.story}</div>
			</div>
		</div>
	);
}

export default CharProfile;