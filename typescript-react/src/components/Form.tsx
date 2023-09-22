import React, { useState } from "react";

const Form: React.FC = () => {
	const [value, setValue] = useState<string | undefined>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const hadleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<div>
			<form onSubmit={hadleSubmit}>
				<input
					onChange={handleChange}
					type="text"
					placeholder="enter your name"
				/>
				<button type="submit">Submit Info</button>
			</form>
			<h1>{value}</h1>
		</div>
	);
};

export default Form;
