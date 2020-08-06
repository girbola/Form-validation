import React, { useState, useEffect } from 'react';
import './Form.css';

//Example how to create the form dynamically
//this example does not care the data type of the field
const Form = props => {
	const [person, setData] = useState({
		name: 'marko',
		age: '12',
	});
	const [jsonData, setJSONData] = useState();

	useEffect(() => {
		setJSONData(JSON.stringify({ person }));
	}, [person]);
	/*
	The form should have two input fields: name and age
	The name must have first letter capitalized
	The age should be integer value  between 0-125
	After entering the values the form should echo the entered values in <p>-element, like
	{"name":"Timo", "age":55}

	Put both values to one js object (create object first let person={}; then add data person.name=....)
	then use JSON.stringify to add the data is the <p> -element (like {JSON.stringify(person)})
	*/
	function validateAge(event) {
		const value = parseInt(event.target.value);
		if (value >= 0 && value <= 125) {
			setData({ age: value });
		}
	}
	function validateName(event) {
		const value = capitalizeFirstLetter(event.target.value);
		if (value.length >= 0) {
			setData({ name: value });
		}
	}
	function capitalizeFirstLetter(value) {
		if (value.length >= 1) {
			return value.charAt(0).toUpperCase() + value.slice(1);
		} else {
			return '';
		}
	}
	return (
		<div className="form">
			<div>
				<input id="nameInput" type="text" value={person.name} onChange={e => validateName(e)}></input>
				<input
					type="number"
					value={person.age}
					pattern="[0,9]"
					inputMode="numeric"
					onChange={e => validateAge(e)}
				></input>
			</div>
			<p>{jsonData}</p>
			<div></div>
		</div>
	);
};

export default Form;
