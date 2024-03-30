import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import './CharPage.css';
import origincharData from '../assets/charData.json';

import CharProfile from '../component/CharProfile';
import CharSkill from '../component/CharSkill';
import CharResoUp from '../component/CharResoUp';
import CharAwakeUp from '../component/CharAwakeUp';
import CharLifeSkill from '../component/CharLifeSkill';
import CharSkins from '../component/CharSkins';

const TestPage = () => {
	const { charName } = useParams();
	const returnIndex = origincharData.findIndex((item) => { return item.name.en === charName });
	const charData = origincharData[returnIndex];

	return (
		<div className="CharaterPage">
			<CharProfile charData={charData} />
			<div className="charater-detail">
				<CharSkill charData={charData} />
				<CharResoUp charData={charData} />
				<CharAwakeUp charData={charData} />
				<CharLifeSkill charData={charData} />
				<CharSkins charData={charData} />
			</div>
		</div>
	)
}

export default TestPage;