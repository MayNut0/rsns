import React, { useState } from "react";

function CharSkins({ charData }) {
  const charName = charData.name.en;
	let [skinSelect, changeSkin] = useState(0);

  return (
    <div className="section-skin">
			<div className="title-skin"><span>캐릭터 스킨</span></div>
      <div className="section-skin-buttons">
        {charData.skins.map((a, i) => {
          return (<button type="button" className="button-skin" onClick={() => { changeSkin(skinSelect = i) }} >{charData.skins[i].name}</button>)
        })}
      </div>
      <div className="section-skin-detail">
        <div className="img-skin">
          <img src={process.env.PUBLIC_URL + '/img/skin/' + charName + '_0' + (skinSelect + 1) + '.png'} alt={`skin${skinSelect + 1}`}></img>
        </div>
        <div className="box-skin-info">
          <div className={`skin__name skin${skinSelect + 1}`}>{charData.skins[skinSelect].name}</div>
          <div className={`skin__get skin${skinSelect + 1}`}>{charData.skins[skinSelect].get}</div>
          <div className={`skin__info skin${skinSelect + 1} json-data`}>{charData.skins[skinSelect].info}</div>
        </div>
      </div>
    </div>
  );
}

export default CharSkins;