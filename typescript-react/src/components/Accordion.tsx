import React, { useState } from "react";

import "./App.css";

function App() {
	const [disableBtn, setDisableBtn] = useState(true);
	const [expand, setExpand] = useState([
		{
			id: 1,
			h1: "first accordion",
			coontent:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laudantium quaerat, pariatur fuga corporis",
			isOpen: false,
		},

		{
			id: 2,
			h1: "second accordion",
			coontent:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laudantium quaerat, pariatur fuga corporis",
			isOpen: false,
		},
		{
			id: 3,
			h1: "third accordion",
			coontent:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laudantium quaerat, pariatur fuga corporis",
			isOpen: false,
		},

		{
			id: 4,
			h1: "fourth accordion",
			coontent:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laudantium quaerat, pariatur fuga corporis",
			isOpen: false,
			isChecked: false,
		},
	]);

	const handleAccordion = (id: number) => {
		setExpand((prev) =>
			prev.map((acc) => (acc.id === id ? { ...acc, isOpen: !acc.isOpen } : { ...acc, isOpen: false }))
		);
	};

	const handleCheckbox = (id: number) => {
		setExpand((prev) => {
			const updatedExpand = prev.map((acc) => (acc.id === id ? { ...acc, isChecked: !acc.isChecked } : acc));
			console.log(updatedExpand);
			const isEnabled = updatedExpand.some((acc) => !acc.isChecked);
			setDisableBtn(isEnabled);
			return updatedExpand;
		});
	};

	return (
		<div className="App">
			{expand.map((item) => (
				<div style={{ display: "flex", flexDirection: "column" }} key={item.id}>
					<h1 onClick={() => handleAccordion(item.id)}>{item.h1}</h1>
					{item.isOpen && (
						<span style={{ color: "#FF4C4C", background: "#F3FEB8", padding: "0.5rem", width: "500px" }}>
							{item.coontent}
						</span>
					)}
					<input type="checkBox" onChange={() => handleCheckbox(item.id)} />
				</div>
			))}

			<button disabled={disableBtn}>submit</button>
		</div>
	);
}

export default App;
