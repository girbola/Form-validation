import React, { useState, useEffect } from 'react';
import Form from './Form';
import { Textbox } from 'react-inputs-validation';
import classes from './Form.css';

const SocialSecurityNumber = () => {
	const [social, setSocial] = useState();
	
	function validateSOS(event) {
		const reg = new RegExp(/((0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])([12]\d{3}))\d{3}\w{1}/);
		const test = reg.test(event.target.value);

		console.log('VALUE: ' + event.target.value + ' test: ' + test);
		if (test) {
			document.getElementById('social').style.background = 'yellow';
		} else {
			document.getElementById('social').style.background = 'red';
		}

	}

	return (
		<div>
			{/* <input onBlur={e => validateSOS(e)} id="name3" className="validate" type="text"></input> */}
			<Textbox
				attributesInput={{
					id: 'social',
					name: 'social',
					type: 'text',
					placeholder: 'Henkilötunnus mmkkvv-abcn',
				}}
				value={social} // Optional.[String].Default: "".
				placeholder="Place your name here ^-^" // Optional.[String].Default: "".
				onChange={(social, e) => {
					validateSOS(e);
					// setSocial(social);
					// console.log(e);
				}} // Required.[Func].Default: () => {}. Will return the value.
				onBlur={e => {
					validateSOS(e);
					console.log(e);
				}} 
			/>
		
		</div>
	);
};

export default SocialSecurityNumber;
