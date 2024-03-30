import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import './CharaterPage.css';

import CharProfile from '../component/CharProfile';
import CharSkill from '../component/CharSkill';
import CharResoUp from '../component/CharResoUp';
import CharAwakeUp from '../component/CharAwakeUp';
import CharLifeSkill from '../component/CharLifeSkill';
import CharSkins from '../component/CharSkins';

const TestPage = () => {
	const { charName } = useParams();
	const [charData, setCharData] = useState();

	useEffect(() => {
		axios.get(`/assets/${charName}.json`)
			.then(response => {
				setCharData(response.data);
			});
	}, []);

	if (charData != undefined) {
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
		);
	}
	else { return (<div className='loading-page'><p>Loading</p></div>) }

}

export default TestPage;