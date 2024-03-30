import React, { useState } from "react";

function CharSkins({ charData }) {
  const charName = charData.name.en;
	let [skinSelect, changeSkin] = useState(0);

  return (
    <div className="charater-skin">
      <div className={`skin-wrap skin${skinSelect + 1}`}>
        <div className="skin-img">
          <img src={process.env.PUBLIC_URL + '/img/charater/' + charName + '/' + charData.skins[skinSelect].file + '.png'} alt={`skin${skinSelect + 1}`}></img>
        </div>
        <div className="skin-info-wrap">
          <div className="skin-button-wrap">
            {charData.skins.map((a, i) => {
              return (<button type="button" className="skin-button" onClick={() => { changeSkin(skinSelect = i) }} >{charData.skins[i].name}</button>)
            })}
          </div>
          <div className={`skin-name skin${skinSelect + 1}`}>{charData.skins[skinSelect].name}</div>
          <div className={`skin-get skin${skinSelect + 1}`}>{charData.skins[skinSelect].get}</div>
          <div className={`skin-info skin${skinSelect + 1} json-data`}>{charData.skins[skinSelect].info}</div>
        </div>
      </div>
    </div>
  );
}

export default CharSkins;