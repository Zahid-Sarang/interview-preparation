import React, { useState } from "react";

interface MyButtonProps {
	text: string;
	onClick?: () => void;
}

const Button: React.FC<MyButtonProps> = ({ text,onClick }) => {
    const [value,setValue] = useState<string>("empty");
	return <button onClick={() => setValue("filled")}>{text}<span>{value}</span></button>;
};

export default Button;
