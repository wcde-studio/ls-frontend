import React, { useState } from 'react';

//type InputName = 'email' | 'password' | 'name';

export const useInput = (initialState: Record<string, string>) => {
	const [inputValue, setInputValue] = useState(initialState);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		setInputValue((inputValue) => ({ ...inputValue, [e.target.name]: e.target.value }));
	};

	const resetInputValue = (name: string) => {
		setInputValue((inputValue) => ({ ...inputValue, [name]: '' }));
	};

	return {
		inputValue,
		handleInputChange,
		resetInputValue,
	};
};
