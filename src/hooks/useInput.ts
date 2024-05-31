import React, { useState } from 'react';

type InputName = 'email' | 'password';

export const useInput = (initialState: Record<InputName, string>) => {
	const [input, setInput] = useState(initialState);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
	};

	const resetInput = (name: string) => {
		setInput((input) => ({ ...input, [name]: '' }));
	};

	return {
		input,
		handleInputChange,
		resetInput,
	};
};
